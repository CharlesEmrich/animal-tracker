# Animal Tracker

#### Keeping Animals Safe with Angular

#### By Charles Emrich
#### CharlesEmrich @ gitHub for any questions.

## Description
An app useful for tracking the attributes of zoo animals and allowing updates from zoo staff.

## Planning

### Dependencies
## Can be found in bower.json and package.json files, but are listed here for convenience.
* gulp-babel, babel-preset-es2015
  * Prevents ES6 features from breaking gulp-uglify
* bower-files
  * Compacts front-end dependencies into a single vendor file
* browser-sync
  * An auto-reloading local server for development purposes
* browserify
  * Allows code utilizing node.js features to run in-browser
* gulp
  * Development task runner/automator
* del
  * Deletion utility used in gulp tasks
* gulp-concat
  * Gulp library to concatenate dev files into single files for production builds
* gulp-jshint, jshint
  * JSHint does JSLint things
* gulp-sass, gulp-sourcemaps
  * Compiles separate sass files into unified CSS files for production builds
* gulp-uglify
  * Minify concatenated files for production builds
* jQuery
  * The one, the only. Used here primarily for DOM manipulation and simplified AJAX calls.

## Specs
| Behavior | Input | Output |
| - | - | - |
| User adds a new animal | *submits forms* | New animal, and its properties, appear in the animal list |
| User edits an animal | *submits an edit form* | Animal's properties are updated in the animal list |
| User filters animals by age | *selects animal age filter from dropdown* | Animal list updates to display only those animals who are sufficiently young. |


## Installation

* Clone the repository (https://github.com/CharlesEmrich/animal-tracker.git)
* Run 'npm install' in terminal to install development dependencies
* Run 'bower install' in terminal to install runtime dependencies
* Run 'gulp serve' to start the local server

## Known Bugs

## Technologies Used

* HTML
* JavaScript
* jQuery
* CSS
* Sass
* NPM
* Bower
* Gulp
* Angular 2

### License

MIT

Copyright (c) 2017 Charles Emrich
