# DEVELOPMENT PHASES

## Initial Instructions

"FriendFinder" application -- a dating app

This application will:

1) Take in resulets from users' surveys
2) Compare users' answers with those from other users'
3) Display the name and picture of the user with the best overall match

It will be made up of two parts:

1) Front-end set of HTML/CSS/JS pages for entering and viewing data.
2) Back-end composed of Node/Express/JS for STORING, UPDATING, and RELAYING reservation DATA.

Components included:

* Server
* Routing
* APIs
* AJAX

----------------

## Phase I -  Write out pieces that need to be programmed for functionality
## Break into 6-7 parts

* Create front-end (visuals) for Home page, Survey page, and Friends views

* Create a basic server using JS

* Create the array variables that will hold the data.

* Create a set of routes for GETTING and POSTING data.

* Create routes for displaying HTML views.

* Use jQuery to run AJAX calls to GET and POST data FROM users TO the EXPRESS server.

----------------

## Phase II - Complete the following

* Backend

Create the basic Express server.

Server should be able to start with the bare minimum. It should say "Listening on PORT 3000" when server.js is run.

* Frontend:

Create HTML files, home.html, survey.html, friends.html. Use dummy data and create pages. 

----------------

## Phase III - Complete the following

* Backend:

Create a set a variables (arrays of objects) for holding survey data.

Create a set of routes that then display this data as JSONs. Users should be given these JSONs if they visit the appropriate page( ex. localhost:3000/api/tables should display a JSON of table data).

* Frontend:

Create the Express routes that will display the HTML pages when a user vivist the appropriate page. ( ex. localhost:3000/tables should display the tables.html page).

----------------

## Phase IV - Complete the following

* Backend:

Create the logic that handles survey requests. This code should work such that POST requests take in JSON objects and compare them with other objects, then adds the JSON object to the friends array. (The POST route should also respond to requests with a confirmation(true or false) or whether or not the requestor has a match).

* Frontend:

Begin research on AJAX, and how it can be used to do GET and POST requests.

Create the code on friends.html page so it can retrieve data from the API. You will be creating an AJAX POST request to send the data.

----------------

# Phave V - Final phase

Complete remaining functionality.

Test and debug.

Clean up.

























