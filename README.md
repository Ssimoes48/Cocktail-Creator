# Cocktail Creator Flask App

![logo](static/Images/logo3.JPG)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Resources](#resources)

## General info


## Technologies
1. Postgres DB
2. Python
3. Javascript libraries like leaflet, jquery, mapbox, plotly
4. HTML, css, 

## Setup

step 1: Git clone our repository into your local
step 2: make sure jupyter notebook is up and running with the env where you have the python libraries mentioned in the notebook installed
step 3: make sure you have postgress app up and running in your machine
step 4: make sure your postgress username and password along with the app id of your map-box is added to the config.py
step 5: create a database in postgres called 'cocktail_db'
step 6: use the cocktail_db.txt inside schema folder to run the create table commands
step 7: run all the jupyter notebooks in the following order:
	category_table
	cocktail_cleanup_function
	recipe_csv
	recipe_csv
step 8: make sure app.py has the right postgress url, username and password
step 9: execute command python app.py and launch the server using URL: http://127.0.0.1:5000/


## Features

interactive Cocktail Dropdown that displays recipe using d3
based on the cocktail choosen from dropdown - Stacked Bar chart of ingredient proportions using Plotly
Bubble chart Shows most used ingredients in popular state cocktails
“Top Cocktail by State” map of using Leaflet.js and Mapbox

## Resources

[Cocktail Data](https://github.com/rfordatascience/tidytuesday/blob/master/data/2020/2020-05-26/readme.md)

To plot on Map of US - clickable by state: Most Popular Cocktail Recipe In Every State In 2020 | Kitchn

[Ingredients vs ideas of visualizations](https://www.thecocktaildb.com/api.php)

State Latitude and Longitude from Kaggle.com



## Contact

[Elliott McFarland](https://github.com/emcfarland)

[Celeste Muniz](https://github.com/celeste1030)

[Saroja Shreenivasan](https://github.com/shreeniv)

[Sai Prasanna](https://github.com/prasanna0913)

[Tim Samson](https://github.com/timsamson)

[Sara Simoes](https://github.com/Ssimoes48)
