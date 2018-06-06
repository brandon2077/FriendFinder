// DEPENDENCIES
// Path is needed for routing to html files

var path = require("path");

// ROUTING

module.exports = function(app) {

	// HTML GET Requests
	// This code handles when a user "visits" a page.
	// ex. localhost:PORT/survey will show the HTML content from survey.html

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	// Default to home
	app.get("*", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};
