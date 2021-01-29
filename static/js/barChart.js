function init() {

    d3.csv("../Data/ingredients.csv").then(function(cocktailData) {

        ingredients = [];
        // cocktailData.forEach(function(data) {
        //     for (i=0; i<6; i++) {
        //         if ((data[ingredientColumns[i]]) && !(ingredients.includes(data[ingredientColumns[i]]))) {
        //             ingredients.push(data[ingredientColumns[i]]);
        //         }
        //     }
        // });

        names = cocktailData.map(data => data.cocktail);

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
}

function cocktailChanged(newCocktail){
    buildBarChart(newCocktail);
}

function buildBarChart(cocktail) {
    d3.csv("../Data/ingredients.csv").then(function (cocktailData) {
        
        // var currentCocktail = cocktailData.filter(d => d.name === cocktail);
        ingredients = [];
        measurements = [];

        var traces = [];

        var currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
    
        for (i=0; i<currentCocktail.length; i++) {
            measurements.push(cocktailData[i].measure);
            ingredients.push(cocktailData[i].ingredient);

            var trace = {
                x: [currentCocktail[0].cocktail],
                y: [parseFloat(measurements[i])],
                name: `oz ${[ingredients[i]]}`,
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
            showlegend: false
        }

        Plotly.newPlot('bar', traces, layout);
    })
}


// function cocktailNames(cocktailData) {

//     return cocktailData.name;

// }



init();
