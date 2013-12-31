//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray
define(["require", "exports", "classes/MapWidget"], function(require, exports, mw) {
    var Greeter = (function () {
        function Greeter(element) {
            console.log("Greeter constructor START");
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerText = new Date().toUTCString();

            this.div = document.createElement('div');

            this.mapWidget = new mw.MapWidget(this.div);
            this.mapWidget.addMap();

            this.element.appendChild(this.div);

            console.log("Greeter constructor END");
        }
        Greeter.prototype.start = function () {
            var _this = this;
            this.timerToken = setInterval(function () {
                return _this.span.innerHTML = new Date().toUTCString();
            }, 500);
        };

        Greeter.prototype.stop = function () {
            clearTimeout(this.timerToken);
        };
        return Greeter;
    })();
    exports.Greeter = Greeter;
});
//# sourceMappingURL=Greeter.js.map
