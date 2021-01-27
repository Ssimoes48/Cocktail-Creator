from flask import Flask, jsonify, render_template, redirect
# from geopy.geocoders import GoogleV3
import psycopg2
import numpy as np
conn = psycopg2.connect(
    host="localhost",
    database="cocktail_db",
    user="postgres",
    password="postgres",

)
mycursor = conn.cursor()

# Create an instance of Flask
app = Flask(__name__)

# Route to render most basic index.html template


@app.route("/", methods=['post', 'get'])
def home():
    # mycursor.execute("static/js/combined_state.js")
    # if request.method == 'POST':
    #     address = request.form['address']
    #     geolocator = GoogleV3()
    #     location = geolocator.geocode(address)
    #     userlat = location.latitude
    #     userlng = location.longitude
    #     return render_template('address.html', userlat=userlat, userlng=userlng)
    # return render_template('index.html')
    # Return template and data
    return render_template("index.html")

# Route to create an HTML table by passing a list of dictionaries to the template


@app.route("/data", methods=['post', 'get'])
def data():
    mycursor.execute("select * from cocktail")
    db_query = mycursor.fetchall()
    db_query = list(np.ravel(db_query))
    return jsonify(db_query)

# # Route to illustrate how JavaScript variables are shared between scripts
# @app.route("/js-variables")
# def js_variables():
#     return render_template("js-variables.html")

# Route to create an Plotly Chart using data through JS Templating


@app.route("/js-templating")
def js_templating():
    mycursor.execute("select * from cocktail")
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
