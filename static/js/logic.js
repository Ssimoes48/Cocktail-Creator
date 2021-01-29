
// var myLandmarks = data


d3.json("/raw-web-api", function (leafletData) {
  // Creating map object
  var myMap = L.map("mapid", {
    center: [40.7, -73.95],
    zoom: 5
  });

  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  // Create a new marker cluster group
  var markers = [];

  // Loop through data
  for (var i = 0; i < leafletData.length; i++) {
    markers.push(L.marker([leafletData[i].latitude, leafletData[i].longitude])


      .bindPopup(
        "<h2 style=text-align:center;>" + leafletData[i].state +
        "</h2><hr><h4><p style=text-align:center;>" + leafletData[i].cocktail + "</p></h4>"
        + "<br>" +
        "<img src=" + leafletData[i].image_scr + " alt='cocktail' &previewImage='true'</img>"
      ));

  }



  var markerLayer = L.layerGroup(markers);

  // Add our marker cluster layer to the map
  myMap.addLayer(markerLayer);
  // markerLayer.on('mouseover', function (e) {
  //   this.openPopup();
  // });
  // markerLayer.on('mouseout', function (e) {
  //   this.closePopup();
  // });
});
