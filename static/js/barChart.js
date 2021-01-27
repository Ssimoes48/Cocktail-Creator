d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(function (cocktailData) {
    cocktailData.forEach(function(data) {
        if (data.name == "Dry Martini") {

            var traces = [];

            ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
            measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];
            
            for (i=0; i<6; i++) {
                if (data[ingredientColumns[i]]) {
                    var trace = {
                        x: [data.name],
                        y: [parseFloat(data[measurementColumns[i]])],
                        name: `oz ${data[ingredientColumns[i]]}`,
                        type: 'bar',
                        width: 0.2,
                    };
                    
                    traces.push(trace);
                }
            }
            console.log(traces);
            layout = {
                barmode: 'stack',
                // xaxis: {
                //     visible: false,
                // },
                yaxis: {
                    visible: false,
                },
                showlegend: false
            }
            Plotly.newPlot('bar', traces, layout);
        }
    });
})

function init() {
    // Read json data
    d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(function(cocktailData) {
        
        names = cocktailData.map(data => data.name);
        console.log(names);


        // Add dropdown option for each sample
        var dropdownMenu = d3.select("#selCocktail");

        dropdownMenu.selectAll("option")
            .data(names)
            .enter()
            .append("option")
            .attr("value", name => name)
            .text(name => name);
        
        var currentSelection = dropdownMenu.node().value;

    });
}

function optionChanged(newSample){
    
}


init()