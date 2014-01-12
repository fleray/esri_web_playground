//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray 

// Module AMD associated to the sample application
/// <reference path='../../typescript_modules/ESRI-TypeScript/esri.amd.d.ts' />
 
/*
 * This is the main entry point (main class). 
 * Here we define 2 maps : one is built directly in the main body, the other in the Greeter class (calling MapWidget).
 */

import ready = require('dojo/ready');
import Map = require('esri/map');
import ImageParameters = require('esri/layers/ImageParameters');
import ArcGISDynamicMapServiceLayer = require('esri/layers/ArcGISDynamicMapServiceLayer');
import GraphicsLayer = require('esri/layers/GraphicsLayer');
import SimpleLineSymbol = require('esri/symbols/SimpleLineSymbol');
import Polyline = require('esri/geometry/Polyline');
import SpatialReference = require('esri/SpatialReference');
import Point = require('esri/geometry/Point');
import Color = require('dojo/_base/Color');
import Graphic = require('esri/graphic');


import gt = require('classes/Greeter');

// Those imports to tests the event binding (subscription to event 'extent-is-changing') thrown by the other map
// when panning it.
import lang = require('dojo/_base/lang');
import em = require('classes/fr.util.events/EventManager');

return function () {

    // create the first map with a default basemap (street) and add it inside the HTML div 'content2'
    // This is the 'big map'.
    var map: esri.Map = new esri.Map('content2', {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: 'streets'
    });

    // Subscribe to 'extent-is-changing' event to make this map follows the mini-map.
    // Technical point : Note the use of lang.hitch to keep the reference to the 'scoped map variable' in the callback.
    var callbackOnExtentChangedOnOtherMap = lang.hitch(map, function (payload?) {
        map.setExtent(payload);
    });

    // main Event Bus
    em.EventManager.getInstance().subscribe('extent-is-changing',
        callbackOnExtentChangedOnOtherMap);    


    // specify the image parameters
    var imageParameters = new esri.layers.ImageParameters();
    imageParameters.format = 'jpeg'; //set the image type to PNG24, note default is PNG8.

    // take a URL to a non cached map service.
    var dynamicMapServiceLayer: esri.layers.ArcGISDynamicMapServiceLayer =
        new esri.layers.
            ArcGISDynamicMapServiceLayer('http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Population_World/MapServer', {
                'opacity': 0.5,
                'imageParameters': imageParameters
            });

    // add the layer to the map
    map.addLayer(dynamicMapServiceLayer);

    // add graphic layer with on red polyline
    var gl : esri.layers.GraphicsLayer = new esri.layers.GraphicsLayer();

    var lineSymbol : esri.symbol.SimpleLineSymbol = new esri.symbol.SimpleLineSymbol(
        esri.symbol.SimpleLineSymbol.STYLE_SOLID, 
        new Color([255,0,0]), 1);

    var sr : esri.SpatialReference = new esri.SpatialReference(102100);

    var p1:esri.geometry.Point = new esri.geometry.Point(-7178604.343040079, 6652571.550624413, sr);
    var p2:esri.geometry.Point = new esri.geometry.Point(-271142.9709671084, 4764271.203867922, sr);

    var points : esri.geometry.Point[] = [p1, p2];

    var geom : esri.geometry.Polyline = new esri.geometry.Polyline(sr);
    geom.addPath(points);

    var gr: esri.Graphic = new esri.Graphic(geom, lineSymbol, null, null);
    gl.add(gr);

    map.addLayer(gl);
 

    // Adding the second map here (see Greeter.ts and MapWidget.ts)
    var el = document.getElementById('content');
    var greeter = new gt.Greeter(el);
    greeter.start();

};
