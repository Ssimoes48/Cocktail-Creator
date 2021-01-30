
d3.json("/bubble-data").then(function(bubbleData) {
  var cocktails = []
  var ingredients = []
  
  bubbleData.forEach(function(data) {
    cocktails.push(data.cocktail)
    ingredients.push(data.ingredient)
  });

  console.log(cocktails)
  console.log(ingredients)

  var trace = {
    x: ingredients,
    y: cocktails,
    mode: "markers",
    marker: {
      size: 15,
      color: "#b300b3"
    },
    text: ingredients,
  };

  var data = [trace];

  var layout = {
    title: "Ingredient's in State's Popular Cocktails",
    height: 600,
    width: 1200,
    margin: {
      l:200,
      b:150
    },
    xaxis: {
      title: "Ingredients",
      tickangle: "45"
    
    },
    yaxis: {
      title: "Cocktails",
    },
  };

Plotly.newPlot("bubble", data, layout);
});
