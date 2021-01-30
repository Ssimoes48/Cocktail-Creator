d3.json("/bubble-data", function(cocktailData) {
  
    var cocktails = [];
    var ingredients = [];

    console.log(cocktailData);

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