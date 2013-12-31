//   Code under MIT License (see main license file).
//   Email : fabrice.leray.dev(at)gmail(dot)com
//   Copyright (c) 2013 Fabrice Leray 

// Import needed reference to MapWidget with TypeScript AMD syntax.
import mw = require("classes/MapWidget");

export class Greeter {
    element: HTMLElement;
    div: HTMLDivElement; // F.LERAY : div element to be used by the esri.Map component.
    mapWidget: mw.MapWidget;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
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

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}
