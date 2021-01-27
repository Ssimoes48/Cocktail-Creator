// d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(function (cocktailData) {
//     // var ingredients = cocktailData.map(data => data["ingredient-2"]);
//     ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
//     measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];
    
//     ingredients = [];
//     measurements = [];

//     cocktailData.forEach(function(data) {


//         for (i=0; i<6; i++) {
//             if ((data[ingredientColumns[i]]) && !(ingredients.includes(data[ingredientColumns[i]]))) {
//                 ingredients.push(data[ingredientColumns[i]]);
//             }
//         }
    
//         if (data.name == "Dry Martini") {

//             var traces = [];


//             for (i=0; i<6; i++) {
//                 if (data[ingredientColumns[i]]) {
//                     var trace = {
//                         x: [data.name],
//                         y: [parseFloat(data[measurementColumns[i]])],
//                         name: `oz ${data[ingredientColumns[i]]}`,
//                         type: 'bar',
//                         width: 0.2,
//                     };
                    
//                     traces.push(trace);
//                 }
//             }

//             layout = {
//                 barmode: 'stack',
//                 // xaxis: {
//                 //     visible: false,
//                 // },
//                 yaxis: {
//                     visible: false,
//                 },
//                 showlegend: false
//             }
//             Plotly.newPlot('bar', traces, layout);
//         }
//     });
//     console.log(ingredients.sort());
// })

function init() {
    // Read json data
    d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(function(cocktailData) {
        ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
        measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];

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

        var ingredientDropdown = d3.select("#selIngredient");
        ingredientDropdown.selectAll("option")
            .data(ingredients.sort())
            .enter()
            .append("option")
            .attr("value", ingredient => ingredient)
            .text(ingredient => ingredient);

        var currentIngredient = ingredientDropdown.node().value;

        buildBarChart(currentCocktail);

    });
}

function cocktailChanged(newCocktail){
    buildBarChart(newCocktail);
}

function ingredientChanged(newIngredient){

}

function buildBarChart(cocktail) {
    d3.csv("/RUT-SOM-DATA-PT-09-2020-U-C/Cocktail-Creator/Data/mr_boston_flattened_cleaned.csv").then(function (cocktailData) {
        // var ingredients = cocktailData.map(data => data["ingredient-2"]);
        ingredientColumns = ["ingredient-1", "ingredient-2", "ingredient-3", "ingredient-4", "ingredient-5", "ingredient-6"];
        measurementColumns = ["measurement-1", "measurement-2", "measurement-3", "measurement-4", "measurement-5", "measurement-6"];
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

init();