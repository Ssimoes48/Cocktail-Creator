var myName = [];
var myType = [];

cocktail_data.forEach(cocktail => {
    myName.push(cocktail.name);
    myType.push(cocktail.type);
});

var data = [
    {
      x: myName,
      y: myType,
      marker:{
        color: myName,
      },
      type: 'bar'
    }
  ];
  
  Plotly.newPlot('my-chart', data);

  console.log(myData);