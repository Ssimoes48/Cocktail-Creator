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
    password="postgres",

)
mycursor = conn.cursor()

#check if we're running in heroku and my environmental variable exist
if 'DATABASE_URL' in os.environ:
    postgres_url = os.environ['DATABASE_URL']
else:
    #if we're not running in heroku then try and get my local config password
    from db import config
    postgres_url = f"postgresql://postgres:{config.postgres_pwd}@127.0.0.1:5432/{db_name}"

def state_data():
    mycursor.execute("select * from state")
    results = mycursor.fetchall()
    result_dicts = [ {"state": result[0], "abbr": result[1], "latitude": result[2], "longitude": result[3], "cocktail": result[4], "image_scr": result[5]} for result in results]
    return jsonify(result_dicts)

# Create an instance of Flask for bubble
def bubble_data():
    mycursor.execute("SELECT s.cocktail, m.ingredient, m.measure, m.unit FROM state s \
                    INNER JOIN measure m ON (s.cocktail = m.cocktail) \
                    GROUP BY s.cocktail, m.ingredient, m.measure, m.unit \
                    ORDER BY s.cocktail DESC;")
    results = mycursor.fetchall()
    result_dicts = [ {"cocktail": result[0], "ingredient": result[1], "measure": result[2], "unit": result[3]} for result in results]
    return (result_dicts)
    
app = Flask(__name__)

# Route to render leaflet map on home
@app.route("/raw-web-api")
def scrape():
    map_data = state_data()
    print("responding to raw-web-api route: ")
    return (map_data)

@app.route("/", methods=['post', 'get'])
def home():
    print("responding to home route request")
    # Return template and data
    return render_template("homepage.html")

# Route to create an HTML table by passing a list of dictionaries to the template


# @app.route("/data", methods=['post', 'get'])
# def data():
    
#     mycursor.execute("SELECT s.cocktail, m.ingredient, m.measure, m.unit .\
#                     FROM state s INNER JOIN measure m ON (s.cocktail = m.cocktail).\
#                     GROUP BY s.cocktail, m.ingredient, m.measure, m.unit.\
#                     ORDER BY s.cocktail DESC;")
#     db_query = mycursor.fetchall()
#     db_query = list(np.ravel(db_query))
#    # conn.close()

#     #  print("responding to /postgresql route request")
#     return jsonify(db_query)

# Route that will return Web API JSON data
# @app.route("/leaflet-web-api", methods=['post', 'get'])
# def leaflet_web_api():
#     mycursor.execute("select * from state")
#     db_query = mycursor.fetchall()
#     db_query = list(np.ravel(db_query))

#     return jsonify(db_query)


@app.route("/leaflet-map")
def leaflet_map():
    # map_data = state_data()
    # mycursor.execute("select * from state")
    # results = mycursor.fetchall()
    # # results = cursor.fetchall()
    # result_dicts = [ {"state": result[0], "abbr": result[1], "latitude": result[2], "longitude": result[3], "cocktail": result[4], "image_scr": result[5]} for result in results]
    # # db_query = list(np.ravel(db_query))
    return render_template("leaflet-map.html")
    # return jsonify(result_dicts)

# @app.route("/leaflet-web-api", methods=['post', 'get'])
# def leaflet_web_api():
    # mycursor.execute("select * from state")
    # db_query = mycursor.fetchall()
    # db_query = list(np.ravel(db_query))
    # return jsonify(db_query)

# # Route to illustrate how JavaScript variables are shared between scripts
# @app.route("/js-variables")
# def js_variables():
#     return render_template("js-variables.html")

# Route to create an Plotly Chart using data through JS Templating
@app.route("/bubble")
def scrape2():
    bub_data = bubble_data()
    print("responding to raw-web-api route: ")
    return jsonify(bub_data)

# @app.route("/bubble")
# def data():
    
#     mycursor.execute("SELECT s.cocktail, m.ingredient, m.measure, m.unit .\
#                     FROM state s INNER JOIN measure m ON (s.cocktail = m.cocktail).\
#                     GROUP BY s.cocktail, m.ingredient, m.measure, m.unit.\
#                     ORDER BY s.cocktail DESC;")
#     db_query = mycursor.fetchall()
#     db_query = list(np.ravel(db_query))
#    # conn.close()

#     #  print("responding to /postgresql route request")
#     return jsonify(db_query)


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
