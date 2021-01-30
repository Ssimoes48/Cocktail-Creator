<<<<<<< HEAD

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
      tickangle: "46"
    
    },
    yaxis: {
      title: "Cocktails",
    },
  };

Plotly.newPlot("bubble", data, layout);
});
=======
d3.json("/bubble-data", function(cocktailData) {
    console.log(cocktailData);

    var cocktails = [];
    var ingredients = [];



    cocktailData.filter(object => {
      cocktails.push(object.cocktail);
      ingredients.push(object.ingredient);
    })


    // create bubble chart
    var data = [{
      x: [ingredients],
      y: [cocktails],
      mode: "markers",
      text: [ingredients],
    }];

    var layout = {
      title: "All OTU's Sample Value",
      height: 500,
      width: 1050,
      xaxis: {
        title: "Ingredients",
      },
      yaxis: {
        title: "Cocktails",
      },
    };
    Plotly.newPlot("bubble", data, layout);

})
>>>>>>> 762de0601c6661480f0498822e80e50f802d5af6
