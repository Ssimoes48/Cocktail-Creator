
function buildBarChart(cocktail) {
    d3.json("/measure-data", function(cocktailData) {
        buildRecipe(cocktail)
        ingredients = [];
        measurements = [];

        var traces = [];
        cocktailData.forEach(function(data) {
            if (data.cocktail === cocktail) {
                ingredients.push(data.ingredient);
                measurements.push(data.measure);
            }
        })
        colors = [
            "#800000",
            "#AC5924",
            "#CC993D",
            "#ECD957",
            "#DF8234",
            "#D6411A"
        ]
        for (i=0; i<ingredients.length; i++) {

            var trace = {
                x: [cocktail],
                y: [parseFloat(measurements[i])],
                name: `${measurements[i]} oz ${ingredients[i]}`,
                type: 'bar',
                width: 1,
                marker: {
                    color: colors[i],
                }
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
    buildRecipe(newCocktail);
    buildBarChart(newCocktail);

}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


function buildRecipe(cocktail) {
    console.log(cocktail);
    d3.json("/recipe-data", function(cocktailData) {
        currentCocktail = cocktailData.filter(d => d.cocktail === cocktail);
        console.log(currentCocktail);

        createList = d3.select("#recipe-list")
            .selectAll("li")
            .data(Object.entries(currentCocktail[0]));

        createList.enter()
            .append("li")
            .merge(createList)
            .text((d,i) => `${d[0]}: ${d[1]}`);

        createList.exit();

    })
}

