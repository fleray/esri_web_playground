<i>This document is under MIT License (see main license file).
Typescript definition file for ArcGIS API for JavaScript Version 3.4
Associated API : http://developers.arcgis.com/en/javascript/
Git repo : https://github.com/fleray/esri_web_playground.git
Email : fabrice.leray.dev(at)gmail(dot)com
Copyright (c) 2013 Fabrice Leray </i>

The esri TypeScript definition file (esri.d.ts) is inside the definition_typescripts folder. Also in this foler is the dojo.d.ts file for the dojo dependency.

You can run the project :

A) using Microsoft Visual Studio 2012
===============================
 - Step 1 : install Microsoft Visual Studio 2012.
 - Step 2 : get and install the TypeScript 0.9.0 alpha from https://typescript.codeplex.com/releases/view/105503
 - Step 3 : double-click the esri "typescript.sln" solution file.
 - Step 4 : build and run the solution using Visual Studio.

B) using the TypeScript command line tool
=========================================
 - Step 1 : get and install the TypeScript 0.9.0 alpha from https://typescript.codeplex.com/releases/view/105503
 - Step 2 : open a the Windows command line and change directory to the first "esri typescript" folder.
 - Step 3 : execute the following command line to build the project:

<pre><code>
tsc.exe --comments --module AMD --sourcemap --target ES3 "esri typescript\definition_typescripts\dojo.d.ts" "esri typescript\definition_typescripts\esri.d.ts" "esri typescript\app.ts"
</code></pre>

And it's done. Then launch the default.html in your favorite browser.


Quick FAQ : 

 - What is TypeScript ?
 
As it is said on the TypeScript web site (http://www.typescriptlang.org/) : 
"TypeScript is a language for application-scale JavaScript development.
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
Any browser. Any host. Any OS. Open Source."

 - Why this development ?
 
	To be used in TypeScript, each library must have a given definition  file (an XXX.d.ts file where XX stands for the name of the associated JavaScript library).
	Here is proposed a TypeScript definition file for the esri Javascript library named "ArcGIS API for JavaScript Version 3.4"

 - Do I have to have Microsoft Visual Studio 2012 ?
 
	No you don't. Although Microsoft Visual Studio 2012 is the most integrated IDE with TypeScript (code completion, highlighting...), you can use install and use TypeScript with SublimeText, Emacs or Vim). For more details : http://msopentech.com/blog/2012/10/01/sublime-text-vi-emacs-typescript-enabled

 - Can I contribute to this developement ?

	Yes, definitely ! First, by using the esri.d.ts in your projects, you can report bugs, missing or bad implementation.
	Also you can contribute by creating samples using the definition file. As a source of inspiration for samples, I propose to start with the basic esri samples, see http://developers.arcgis.com/en/javascript/jssamples/.


Furthermore, I develop esri.d.ts on my spare time so let me know if you want to take part of it.

Finally I would greatly appreciate to be aware of the projects using the esri.d.ts library. A simple mail is a nice reward.