ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];


function init() {

    d3.csv("../Data/mr_boston_flattened_cleaned.csv").then(function(cocktailData) {

        ingredients = [];
        cocktailData.forEach(function(data) {
            for (i=0; i<6; i++) {
                if ((data[ingredientColumns[i]]) && !(ingredients.includes(data[ingredientColumns[i]]))) {
                    ingredients.push(data[ingredientColumns[i]]);
                }
            }
        });

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
        return names;
    });
}

function cocktailChanged(newCocktail){
    buildBarChart(newCocktail);
}

function buildBarChart(cocktail) {
    d3.csv("../Data/mr_boston_flattened_cleaned.csv").then(function (cocktailData) {
        
        var currentCocktail = cocktailData.filter(d => d.name === cocktail);
        ingredients = [];
        measurements = [];

        var traces = [];
    
        for (i=0; i<6; i++) {
            if (currentCocktail[0][ingredientColumns[i]]) {
                var trace = {
                    x: [currentCocktail[0].name],
                    y: [parseFloat(currentCocktail[0][measurementColumns[i]])],
                    name: `oz ${currentCocktail[0][ingredientColumns[i]]}`,
                    type: 'bar',
                    width: 0.2,
                };
                
                traces.push(trace);
            }
        }

        layout = {
            barmode: 'stack',
            title: currentCocktail[0].name,
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


function cocktailNames() {

    return d3.csv("../Data/mr_boston_flattened_cleaned.csv").then(function(cocktailData) {
        var promises = cocktailData.map(function(data) {
            return data.name;
        });
        return Promise.all(promises);
    });
}

cocktailNames().then(function(names) {
    return names;
});

init();