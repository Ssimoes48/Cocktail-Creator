// Store our API endpoint inside queryUrl
// Perform a GET request to the query URL
// var pic = {}
var squirrel = "https://images.fineartamerica.com/images-medium-large-5/squirrels-at-cocktail-hour-peggy-collins.jpg"
var oldFash = "https://d32miag6ta013h.cloudfront.net/master_cocktails/2869/en-us/small/old-fashioned-sml-470x594.jpg"
var manHat = "https://craftybartending.com/wp-content/uploads/2018/04/Manhattan-Cocktail-1.jpg"


function choosePic(cocktail) {
    var pic = "";
    if (cocktail === " Old Fashioned") { pic = oldFash; }
    else if (cocktail === " Manhattan") { pic = manHat; }
    else { pic = squirrel; }

    return pic;

};


d3.json("/static/js/combined_state.js", function (data) {
    console.log("data from combined state");
    createFeatures(data);
    console.log(myData);
})
// d3.json("Data/combined_state.geojson", function (data) {
// Once we get a response, send the data.features object to the createFeatures function
//console.log(myData.features)

// });

function createFeatures(stateData) {


    // Define a function we want to run once for each feature in the features array
    // Give each feature a popup describing the place and time of the earthquake
    function onEachFeature(feature, layer) {
        var cocktail = feature.properties.cocktail;
        layer.bindPopup("<h2 style=text-align:center;>" + feature.properties.state +
            "</h2><hr><p style=text-align:center;>" + cocktail + "</p>"
            + "<p>" + "<a href=" + "http://www.google.com" + ">" +
            "<img src='" + choosePic(cocktail) + "' alt='squirrels' width='126' height='auto'>" + "</a>" + "</p>"
        );

        // layer.on('mouseover', function (e) {
        //     this.openPopup();
        // });
        // layer.on('mouseout', function (e) {
        //     this.closePopup();
        // });
    }

    // Create a GeoJSON layer containing the features array on the stateData object
    // Run the onEachFeature function once for each piece of data in the array
    var states = L.geoJSON(stateData, {
        onEachFeature: onEachFeature
    });

    // Sending our states layer to the createMap function
    createMap(states);
}

function createMap(states) {

    // Define lightmap and darkmap layers
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openlightmap.org/copyright'>Openlightmap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openlightmap.org/\">Openlightmap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY
    });

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
        "Light Map": lightmap,
        "Dark Map": darkmap
    };

    // Create overlay object to hold our overlay layer
    var overlayMaps = {
        States: states
    };

    // Create our map, giving it the lightmap and states layers to display on load
    var myMap = L.map("mapid", {
        center: [
            37.09, -95.71
        ],
        zoom: 5,
        layers: [lightmap, states]
    });

    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
        collapsed: true
    }).addTo(myMap);
}
