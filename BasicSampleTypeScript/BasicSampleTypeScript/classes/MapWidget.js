//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray
define(["require", "exports", 'jquery', "esri/layers/ArcGISDynamicMapServiceLayer", "dojo/json", "dojo/_base/lang", "classes/fr.util.events/EventManager"], function(require, exports, jquery, ArcGISDynamicMapServiceLayer, json, lang, em) {
    var MapWidget = (function () {
        function MapWidget(element) {
            this.element = element;
        }
        MapWidget.prototype.logProperty = function (o) {
            try  {
                json.stringify(o);
                return o;
            } catch (e) {
                return "[undumpable Object]";
            }
        };

        MapWidget.prototype.logObject = function (o, self) {
            var r = new Object();
            for (var p in o) {
                r[p] = self.logProperty(o[p]);
            }

            document.getElementById("events").innerHTML = json.stringify(r, null, true).replace(/\n/g, "<br/>");
        };

        MapWidget.prototype.addMap = function () {
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
            var funcDblClick = lang.hitch(this, function (evt) {
                var o = evt.mapPoint;
                this.logObject(o, this);
                return true;
            });

            var self = this;
            this.map.on("dbl-click", funcDblClick);

            var funcExtentChange = lang.hitch(this, function (evt) {
                var extent = evt.extent;

                // main Event Bus
                em.EventManager.getInstance().publish("extent-is-changing", extent);

                return true;
            });

            var self = this;
            this.map.on("extent-change", funcExtentChange);
        };

        MapWidget.prototype.removeMap = function () {
            $(this.element).css("background", "yellow");
            $(this.element.id).css("visibility", "hidden");
        };
        return MapWidget;
    })();
    exports.MapWidget = MapWidget;
});
//# sourceMappingURL=MapWidget.js.map
