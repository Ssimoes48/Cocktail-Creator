d3.json("/cocktail-name-data", function(cocktailData) {
    names = []
    cocktailData.forEach(function(data) {
        names.push(data.cocktail)
    })
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
    buildRecipe(currentCocktail);
});


function buildBarChart(cocktail) {
    d3.json("/measure-data", function(cocktailData) {
        ingredients = [];
        measurements = [];

        var traces = [];
        cocktailData.forEach(function(data) {
            if (data.cocktail === cocktail) {
                ingredients.push(data.ingredient);
                measurements.push(data.measure);
            }
        })
    
        for (i=0; i<ingredients.length; i++) {

            var trace = {
                x: [cocktail],
                y: [parseFloat(measurements[i])],
                name: `${measurements[i]} oz ${ingredients[i]}`,
                type: 'bar',
                width: 0.4,
            };
            
            traces.push(trace);
        }

        layout = {
            barmode: 'stack',
            title: cocktail,
            xaxis: {
                visible: false,
            },
            yaxis: {
                visible: false,
            },
            showlegend: true,
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

function buildRecipe(cocktail) {
    d3.json("/recipe-data", function(cocktailData) {
        currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
        headers = Object.keys(currentCocktail);
        tableData = currentCocktail.values();

        // var recipeTable = d3.select("#recipe-table").append("table");
        // var header = recipeTable.append("thead");
        // var body = recipeTable.append("tbody");

        // header.append("tr")
        //     .selectAll("th")
        //     .data(headers)
        //     .enter()
        //     .append("th")
        //     .text(d => d)

        // row = body.append("tr").selectAll("")
        //     .data(ableData)
        //     .enter()
        //     .append("tr")

        //         row.selectAll("td")
        //             .data()

        console.log(currentCocktail[0]);
        recipeList = d3.select("#recipe-list").append("ul")
            recipeList.selectAll("li")
                .data(Object.values(currentCocktail[0]))
                .enter()
                .append("li")
                .text(d => d);

        //     }
        // });

        // recipeTable.selectAll("tr")
        //     .data(names.sort())
        //     .enter()
        //     .append("option")
        //     .attr("value", name => name)
        //     .text(name => name);
    })
}

function loadAutocompleteData() {
    d3.json("/cocktail-name-data", function(cocktailData) {
        names = [];
        cocktailData.forEach(function(data) {
            names.push(data.cocktail);  
        });
        return names;
    });
}

