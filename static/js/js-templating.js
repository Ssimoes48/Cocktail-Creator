var myName = [];
var myType = [];

cocktail_data.forEach(cocktail => {
    myName.push(cocktail.name);
    myType.push(cocktail.type);
});

var data = [
    {
      x: myType,
      y: myName,
      marker:{
        color: myName,
      },
      type: 'scatter'
    }
  ];
  
  Plotly.newPlot('my-chart', data);

  console.log(myData);
  

