d3.json("/cocktail-name-data", function(cocktailData) {
    console.log(cocktailData);
    names = cocktailData.map(data => data.name);


    // Add dropdown option for each sample
    var cocktailDropdown = d3.select("#selCocktail");

    cocktailDropdown.selectAll("option")
        .data(names.sort())
        .enter()
        .append("option")
        .attr("value", name => name)
        .text(name => name);
    
    var currentCocktail = cocktailDropdown.node().value;

    buildBarChart(currentCocktail);
});

function buildBarChart(cocktail) {
    d3.json("/measure-data", function(cocktailData) {
        
        // var currentCocktail = cocktailData.filter(d => d.name === cocktail);
        ingredients = [];
        measurements = [];

        var traces = [];

        var currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
    
        for (i=0; i<currentCocktail.length; i++) {
            measurements.push(currentCocktail[i].measure);
            ingredients.push(currentCocktail[i].ingredient);

            var trace = {
                x: [currentCocktail[0].cocktail],
                y: [parseFloat(measurements[i])],
                name: `${measurements[i]} oz ${ingredients[i]}`,
                type: 'bar',
                width: 0.2,
            };
            
            traces.push(trace);
        }

        layout = {
            barmode: 'stack',
            title: currentCocktail[0].cocktail,
            xaxis: {
                visible: false,
            },
            yaxis: {
                visible: false,
            },
            showlegend: true
        }

        Plotly.newPlot('bar', traces, layout);
    })
}

function cocktailChanged(newCocktail){
    buildBarChart(newCocktail);
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// function cocktailNames() {
//     d3.json("/measure-data").then(function (cocktailData) {
//         names = cocktailData.map(data => data.cocktail);
//         names = names.filter(onlyUnique);
//         return names;
//     });
// }

