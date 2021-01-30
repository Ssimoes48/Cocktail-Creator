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

    cocktailDropdown.exit();
    
    var initialCocktail = cocktailDropdown.node().value;

    buildBarChart(initialCocktail);
    buildRecipe(initialCocktail);
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

        // currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
        // var recipeTable = d3.select("#recipe-table").append("table");
        // var header = recipeTable.append("thead").append("tr");
        // // var body = recipeTable.append("tbody");

        // header.selectAll("th")
        //     .data(Object.entries(currentCocktail[0]));
        
        // header.enter()
        //     .append("th")
        //     .merge(header)
        //     .text((d,i) => {console.log(d[0]); return d[0]});

        // header.exit()
        //     .remove();

        // row = body.append("tr").selectAll("")
        // .data(ableData)
        // .enter()
        // .append("tr")

        //     row.selectAll("td")
        //         .data()
    })
}

function cocktailChanged(newCocktail){
    buildBarChart(newCocktail);
    buildRecipe(newCocktail);
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
    console.log(cocktail);
    d3.json("/recipe-data", function(cocktailData) {
        currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
        console.log(currentCocktail);

        createList = d3.select("#recipe-list").append("ul")
        recipeList = d3.select("#recipe-list")
            .selectAll("li")
            .data(Object.entries(currentCocktail[0]));

        recipeList.enter()
            .append("li")
            .merge(recipeList)
            .text((d,i) => `${d[0]}: ${d[1]}`);

        recipeList.exit();

    })
}

// function loadAutocompleteData() {
//     d3.json("/cocktail-name-data", function(cocktailData) {
//         names = [];
//         cocktailData.forEach(function(data) {
//             names.push(data.cocktail);  
//         });
//         return names;
        
//     });
// }
