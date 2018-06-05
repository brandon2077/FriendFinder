// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");

// EXPRESS CONFIGURATION
// Setting up the basic properties of the server
// --------------------
// Tell node we are creating an "express" server

var app = express();

// Set the initial port.

var PORT = process.env.PORT || 8080;

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

// ROUTER CONFIGURATION
// --------------------
// Points the server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs

require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app);

// LISTENER
// --------------------

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
