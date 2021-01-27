d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(buildBar);

function buildBar(cocktailData) {

    cocktailData.forEach(function(data) {
        if (data.name == "Gauguin") {

            var traces = [];

            ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
            measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];
            
            for (i=0; i<6; i++) {
                if (data[ingredientColumns[i]]) {
                    var trace = {
                        x: data.name,
                        y: [parseFloat(data[measurementColumns[i]])],
                        name: [data[ingredientColumns[i]]],
                        type: 'bar'
                    };
                    
                    traces.push(trace);
                }
            }
            console.log(traces);
            Plotly.newPlot('bar', traces, {barmode: 'stack'});
        }
    });
}
