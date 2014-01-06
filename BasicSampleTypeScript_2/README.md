_This document is under MIT License (see main license file)._

_Email : fabrice.leray.dev(at)gmail(dot)com_

_Copyright (c) 2014 Fabrice Leray_

Technical demo 2
================

At first sight, this is the _quite the same demo_ as the one presented in BasicSampleTypeScript - thas is to say _how to benefit from the TypeScript capabilities_ such as :

- class building and modules organizations with TypeScript
- a TypeScript implementation of an observer/listener pattern (for custom events), dojo tricks (lang.hitch, dojo.on...)
- jQuery TypeScript and Esri TypeScript AMD integration

**BUT this demo is much more as it MOSTLY presents how all this can be accomplished in a more _professional development manner_ using the [Yeoman](http://yeoman.io/) workflow. To be short, it is a combination of 3 tools : [Grunt](http://gruntjs.com/), [Yo](http://yeoman.io/) and [Bower](http://bower.io/)**

- Everything is now managed by `Grunt`.
- Example 1 : Javascript syntax is now checked using `jshint`.
- Example 2 : Minify and obfiuscate your produced JavaScript code using `uglify`.
- Example 3 : using your favorite IDE (Sublime Text or Visual Studio for instance), you will now be able to change the background color of the mini map (let's say from red to green) inside the class `MapWidget.ts` :

                        `$(this.element).css("background", "red");`
										  =>
                        `$(this.element).css("background", "green");`
						
	And, as the application is launched with the `'grunt serve'` command (see next paragraph "Getting started -> Run the demo"), the grunt `watch task` will automatically detect the change and run the Typescript recompiling task : _just awesome no :-) ??_
- Example...


## Getting started ##

**Build the demo**

This demo is intended for developers. It demonstrates the benefit of continuous development workflow created with [Yeoman](http://yeoman.io/).

Therefore, you MUST install a complete development system.  
To do so, make sure you have installed [Node.js](http://nodejs.org/), [Ruby](https://www.ruby-lang.org/fr/) and [Compass](http://compass-style.org/install/).

Ruby comes with `gem`installer (used to install Compass).  
Node comes with the `npm` package installer (for installing EVERYTHING else). 

Once `Node`, `Ruby` and `Compass` are installed, have `Grunt` _globally_ installed :  
`npm install -g grunt`


Finally, once Grunt is installed, open a command line and enjoy the "Grunt Power" :  
`npm install`


_Important note : in order to produce the `Gruntfile.js` and `package.json`, we also needed the [Yo](http://yeoman.io/) and [Bower](http://bower.io/) packages. But those packages are not needed here as those files already exists in the project._

**Run the demo**

Several launchers are available inside the grunt configuration (see Gruntfile.js file).

For development purpose, use :  
`grunt serve`

It will compile TypeScript code (and put inside the `scripts` folder), check the created JS code (jshint), run a dev web server and watch for JavaScript/TypeScript file modifications (and do a rebuild in that case).

All those steps are described within the grunt tasks (see Gruntfile.js file for more details).

## Helping You and Us ##

You are highly encouraged to report bugs and feedback on this demo.

Maybe would you have done it differently ? If so, explaining us why and how is, for us, the best way for everyone to improve on TypeScript, this not-so-old language :)

**Thank's :**
-------------

Many thank's to **Jesse Wade** for his terrific video presentation about the [Crash Course in Node, Bower, and Grunt](http://www.youtube.com/watch?v=vkRv0r_tNXY). This is a _MUST-SEE_ for those who are not familiar with those tools. It's only 37 min long and believe me, it's worth it :-)

Many thank's to **Blorkfish** for his tutorial on how to "[organize your code with amd modules and requireJS](http://blorkfish.wordpress.com/2012/10/23/typescript-organizing-your-code-with-amd-modules-and-require-js/)".

Many thank's to **Jeremy Likness** for his implementation of a "JavaScript Event Aggregator using TypeScript" available at [Building a javascript event aggregator using typescript](http://www.wintellect.com/blogs/jlikness/building-a-javascript-event-aggregator-using-typescript).

Many thank's to **Schungx** for his [Dojo AMD 1.9 binding](https://github.com/schungx/Dojo-TypeScript).

Many thank's to **Patrice Freydiere** for his work on Esri TypeScript AMD version (see his [implementation](https://github.com/frett27/ESRI-TypeScript) and [samples](https://github.com/frett27/ESRI-TypeScript-Samples).

Many thank's to **Boris Yankov**, **John Reilly** for their work on the [jQuery TypeScript](https://github.com/borisyankov/DefinitelyTyped) version.

