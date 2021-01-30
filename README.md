# Cocktail Creator Flask App

![logo](static/Images/logo3.JPG)

![gif](https://media0.giphy.com/media/3o7qDZCsPfhyaRazE4/giphy.gif?cid=ecf05e475kr7ugqqtux44yfk8yyp0stctomqe8kxneh8anve&rid=giphy.gif)

[Cocktail Creator]( https://makeyourcocktails.herokuapp.com)

## Table of contents
* [Cocktail Creator](#cocktail-creator)
* [Technologies](#technologies)
* [Objective](#objective)
* [Extract](#extract)
* [Transform](#transform)
* [Load](#load)
* [Deploy](deploy)
* [Visualizations](#visualizations)
* [HTML](html)
* [Run Flask App](run-flask)
* [Heroku](heroku)
* [Resources](#resources)
* [Contacts](#contacts)

## Objective 

Our objective was to create an interactive website where you can find recipes for hundreds of unique cocktails.

Target Market:

* Bartenders
* Event Planners
* Restaurant Owners
* Everyone stuck at home
* You in your next zoom Happy Hour
* You!!!

## Technologies

* SQL / Postgres DB
* Python
* Javascript Libraries: leaflet, jquery, mapbox, plotly
* HTML / CSS 
* Jupyter Notebook / Pandas

# Extract

We gathered our cocktail data from sources like Kaggle, Cocktail DB and Kitchn. Our data was in the form of CSS. We also worked on web scraping, but we were not successful in our attempts. We ended up pulling data from the web scrape sites directly. Our data sources included information on cocktail types, their ingredients, and the recipes to make the cocktails. We also had data sources with state longitude and latitude coordinates to help plot our “Cocktails by State” map in `leaflet` . 

# Transform

We loaded our css data into `jupyter notebook` to clean the data. One of the greatest discrepancies in our data was the measurement type and value for our ingredients. Some ingredients were listed in oz and some were listed in tsp or quantity. We used formulas to transform our measurement values into a consistent ounce format. There were also `null` values in our measurements. To make the `null` values consistent we needed to view them and assign them corresponding values. For example, there was a lemon wedge ingredient with the value of `null` so we changed it to be a value of “1”. 
We combined data sets for state cocktail and geographic coordinates into one table to use for our Map visualization. 

# Load

We chose to use a SLQ database in Postgres for our data because it is a more structured format. We had plans to have additional visualizations with more complicated queries, but we did not have time to complete them all. We mapped out our database using Quick Database Diagram and created a schema. The schema assigned keys and foreign keys to help link our data together in our queries. We used the cocktail name as a our primary key. 
Once our schema was loaded into Postgres, we ran our jupyter notebooks to load the data. 

![Schema](static/Images/Draft_Schema.png)

# Deploy

In visual studio code using javascript, we created app routes to call our data queries form the SQL database. Once the data was called properly, we were able to create visualizations for our website. 

 
# Visualizations

![dropdown](static/Images/drop_down.JPG)

We created several visualizations for our Cocktail Creator website. On our home page, we have a dropdown menu (d3) of our cocktail names which calls the cocktail recipe and how to make the drink. Next to the recipe, there is a stacked bar chart visualization (plotly) that shows the ingredients and their measurements and proportions in the cocktail. Both visualizations are called when you selected from the dropdown. 

![barchart](static/Images/recipe_bar.png)


![bubble](static/Images/bubble.JPG)

On a separate web page, we have a visualization of a bubble chart (plotly) that shows the top state cocktails and their most popular ingredients. The chart has ‘hover over’ functionality so you can clearly see the ingredient type and cocktail name. 

![bubble chart](static/Images/Bubble_chart.JPG)

![map](static/Images/map.JPG)

Our final visualization is an interactive map of the United States that shows the “Top Cocktail by State”. We created this using Leaflet.js and Mapbox. When you click each state, a popup appears that shows the state name, most popular cocktail type, and an image of the cocktail. 

![map site](static/Images/state_map.JPG)

## HTML

We designed our interactive Cocktail Creator website using css formatting. To make the site a seamless experience for the user, we formatted each page with a matching themed background image and user-friendly navigation bar. We also added image headers to each page for consistency. 


## Run Flask

To Deploy our Flask App, please follow the below steps :
* step 1: Git clone our repository into your local

* step 2: make sure jupyter notebook is up and running with the env where you have the python libraries mentioned in the notebook installed

* step 3: make sure you have postgress app up and running in your machine

* step 4: make sure your postgress username and password along with the app id of your map-box is added to the config.py

* step 5: create a database in postgres called 'cocktail_db'

* step 6: use the cocktail_db.txt inside schema folder to run the create table commands

* step 7: run all the jupyter notebooks in the following order:
	* category_table
	* cocktail_cleanup_function
	* recipe_csv
	* recipe_csv

* step 8: make sure config.py has the right postgress url, username and password 

* step 9: execute command python app.py and launch the server using URL: http://127.0.0.1:5000/

## Heroku

[Cocktail Creator Heroku Link](https://makeyourcocktails.herokuapp.com)

## Resources

[Cocktail Data](https://github.com/rfordatascience/tidytuesday/blob/master/data/2020/2020-05-26/readme.md)

[Most Popular Cocktail Recipe In Every State In 2020 | Kitchn](https://www.thekitchn.com/most-popular-cocktail-recipes-covid-23038322)

[Ingredients vs ideas of visualizations](https://www.thecocktaildb.com/api.php)

[State Latitude and Longitude](https://www.kaggle.com/washimahmed/usa-latlong-for-state-abbreviations)



## Contact

[Elliott McFarland](https://github.com/emcfarland)

[Celeste Muniz](https://github.com/celeste1030)

[Saroja Shreenivasan](https://github.com/shreeniv)

[Sai Prasanna](https://github.com/prasanna0913)

[Tim Samson](https://github.com/timsamson)

[Sara Simoes](https://github.com/Ssimoes48)


![thanks!](static/Images/thank_you.JPG)
