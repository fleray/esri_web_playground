//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray 

/// <reference path="../../typescript_modules/ESRI-TypeScript/esri.amd.d.ts" /> // F.LERAY : import esri.amd.d.ts here to use the lib to create a map
/// <reference path="../../typescript_modules/JQuery-TypeScript/jquery.d.ts" /> // F.LERAY : import jquery here to set the visibility to hidden when
// doing a removeMap (not used for now)


import jquery = require('jquery');
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer");
import json = require("dojo/json");
import lang = require("dojo/_base/lang");
import em = require("classes/fr.util.events/EventManager");


export class MapWidget {
    element: HTMLElement;
    map: esri.Map;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    
    logProperty(o: Object): Object {
        try {
            json.stringify(o);
            return o;
        } catch (e) {
            return "[undumpable Object]";
        }
    }


    logObject(o: Object, self : MapWidget): void {
        var r: Object = new Object();
        for (var p in o) {
            r[p] = self.logProperty(o[p]);
        }

        document.getElementById("events").innerHTML = json.stringify(r, null, true).replace(/\n/g, "<br/>");
    }

    addMap() {
        $(this.element).css("background", "red");
        $(this.element).css("width", "200px");
        $(this.element).css("height", "200px");
        this.map = new esri.Map(this.element, {
            center: [-56.049, 38.485],
            zoom: 3,
            basemap: "streets"
        });

        // Use lang.hitch to keep an object contained in a given scope (here "this")
        // Technical Point : see https://dojotoolkit.org/reference-guide/1.7/dojo/hitch.html
        // Extract : "Dojo.hitch is a neat function. It returns a function that will execute a given function
        // in a given scope.This function allows you to control how a function executes, particularly 
        // in asynchronous operations."
        var funcDblClick = lang.hitch(this, function (evt: esri.MouseEvent2) {
            var o: Object = evt.mapPoint;
            this.logObject(o, this);
            return true;
        });

        var self = this;
        this.map.on("dbl-click", funcDblClick);

        var funcExtentChange = lang.hitch(this, function (evt: esri.ExtentEvent) {
            var extent: esri.geometry.Extent = evt.extent;

            // main Event Bus
            em.EventManager.getInstance().publish("extent-is-changing", extent);            

            return true;
        });

        var self = this;
        this.map.on("extent-change", funcExtentChange);
    }

    removeMap() {
        $(this.element).css("background", "yellow");
        $(this.element.id).css("visibility", "hidden");
    }
}
