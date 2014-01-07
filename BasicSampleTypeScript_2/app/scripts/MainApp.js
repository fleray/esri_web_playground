//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray
define(["require", "exports", 'dojo/ready', 'esri/map', 'esri/layers/ImageParameters', 'esri/layers/ArcGISDynamicMapServiceLayer', 'esri/layers/GraphicsLayer', 'esri/symbols/SimpleLineSymbol', 'esri/geometry/Polyline', 'esri/SpatialReference', 'esri/geometry/Point', 'dojo/_base/Color', 'esri/graphic', 'classes/Greeter', 'dojo/_base/lang', 'classes/fr.util.events/EventManager'], function(require, exports, ready, Map, ImageParameters, ArcGISDynamicMapServiceLayer, GraphicsLayer, SimpleLineSymbol, Polyline, SpatialReference, Point, Color, Graphic, gt, lang, em) {
    return function () {
        // create the first map with a default basemap (street) and add it inside the HTML div 'content2'
        // This is the 'big map'.
        var map = new esri.Map('content2', {
            center: [-56.049, 38.485],
            zoom: 3,
            basemap: 'streets'
        });

        // Subscribe to 'extent-is-changing' event to make this map follows the mini-map.
        // Technical point : Note the use of lang.hitch to keep the reference to the 'scoped map variable' in the callback.
        var callbackOnExtentChangedOnOtherMap = lang.hitch(map, function (payload) {
            map.setExtent(payload);
        });

        // main Event Bus
        em.EventManager.getInstance().subscribe('extent-is-changing', callbackOnExtentChangedOnOtherMap);

        // specify the image parameters
        var imageParameters = new esri.layers.ImageParameters();
        imageParameters.format = 'jpeg'; //set the image type to PNG24, note default is PNG8.

        // take a URL to a non cached map service.
        var dynamicMapServiceLayer = new esri.layers.ArcGISDynamicMapServiceLayer('http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer', {
            'opacity': 0.5,
            'imageParameters': imageParameters
        });

        // add the layer to the map
        map.addLayer(dynamicMapServiceLayer);

        // add graphic layer with on red polyline
        var gl = new esri.layers.GraphicsLayer();

        var lineSymbol = new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 1);

        var sr = new esri.SpatialReference(102100);

        var p1 = new esri.geometry.Point(-7178604.343040079, 6652571.550624413, sr);
        var p2 = new esri.geometry.Point(-271142.9709671084, 4764271.203867922, sr);

        var points = [p1, p2];

        var geom = new esri.geometry.Polyline(sr);
        geom.addPath(points);

        var gr = new esri.Graphic(geom, lineSymbol, null, null);
        gl.add(gr);

        map.addLayer(gl);

        // Adding the second map here (see Greeter.ts and MapWidget.ts)
        var el = document.getElementById('content');
        var greeter = new gt.Greeter(el);
        greeter.start();
    };
});
