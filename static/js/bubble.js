var myIng = [];
var myMeasure = [];

cocktail_data.forEach(cocktail => {
    myIng.push(cocktail.ingredient);
    myType.push(cocktail.measure);
});

var data = [
    {
      x: myIng,
      y: myMeasure,
      marker:{
        color: myName,
      },
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('my-chart', data);

  console.log(myData);


