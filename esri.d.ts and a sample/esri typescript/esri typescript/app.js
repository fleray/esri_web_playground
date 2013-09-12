// Code under MIT License (see main license file).
// Typescript definition file for ArcGIS API for JavaScript Version 3.4
// Associated API : http://developers.arcgis.com/en/javascript/
// Git repo : https://github.com/fleray/esri_web_playground.git
// Email : fabrice.leray.dev(at)gmail(dot)com
// Copyright (c) 2013 Fabrice Leray
/// <reference path="definition_typescripts/esri.d.ts" />
window.onload = function () {
    // create the map with a default basemap (strret) and add it inside the HTML mapDiv
    var map = new esri.Map("mapDiv", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets"
    });

    var imageParameters = new esri.layers.ImageParameters();
    imageParameters.format = "jpeg";

    // take a URL to a non cached map service.
    var dynamicMapServiceLayer = new esri.layers.ArcGISDynamicMapServiceLayer("http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer", {
        "opacity": 0.5,
        "imageParameters": imageParameters
    });

    // add the layer to the map
    map.addLayer(dynamicMapServiceLayer);
};
//# sourceMappingURL=app.js.map
