from flask import Flask, jsonify, render_template, redirect
# from geopy.geocoders import GoogleV3
import os
import psycopg2
import numpy as np
import socket

db_name = "cocktail_db"
conn = psycopg2.connect(
    host="localhost",
    database="cocktail_db",
    user="postgres",
    password="agent",

)
mycursor = conn.cursor()

#check if we're running in heroku and my environmental variable exist
if 'DATABASE_URL' in os.environ:
    postgres_url = os.environ['DATABASE_URL']
else:
    #if we're not running in heroku then try and get my local config password
    from db import config
    postgres_url = f"postgresql://postgres:{config.postgres_pwd}@127.0.0.1:5432/{db_name}"

# Create an instance of Flask
app = Flask(__name__)

# Route to render most basic index.html template


@app.route("/", methods=['post', 'get'])
def home():
    print("responding to home route request")
    # Return template and data
    return render_template("index.html")

# Route to create an HTML table by passing a list of dictionaries to the template


@app.route("/data", methods=['post', 'get'])
def data():
    
    mycursor.execute("select * from measure")
    db_query = mycursor.fetchall()
    db_query = list(np.ravel(db_query))
   # conn.close()

    #  print("responding to /postgresql route request")
    return jsonify(db_query)

# # Route to illustrate how JavaScript variables are shared between scripts
# @app.route("/js-variables")
# def js_variables():
#     return render_template("js-variables.html")

# Route to create an Plotly Chart using data through JS Templating


@app.route("/js-templating")
def js_templating():
    mycursor.execute("select * from measure")
    db_query = mycursor.fetchall()

    #color_data_from_db = get_color_data_dict_from_db()

    # db data extracted and storres in db_query
    return render_template("js-templating.html", db_data=db_query)


# Route that will return Web API JSON data
# @app.route("/raw-web-api")
# def scrape():
#     color_data_from_db = get_color_data_dict_from_db()

#     return jsonify(color_data_from_db)

# # Route to render visualization by querying web api from JavaScript
# @app.route("/js-using-web-api")
# def js_using_web_api():
#     return render_template("js-using-web-api.html")


# # Function that queries database and returns a dictionary
# def get_color_data_dict_from_db():
#     table_name = "color_votes"
#     conn = sqlite3.connect('db/favorite_color.db')

#     cursor = conn.cursor()

#     cursor.execute(f'''SELECT VOTES, COLOR from {table_name}''')

#     results = cursor.fetchall()
#     result_dicts = [ {"votes": result[0], "color": result[1]} for result in results]

#     conn.close()

#     return result_dicts


if __name__ == "__main__":
    app.run(debug=True)
