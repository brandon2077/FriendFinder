// LOAD DATA
// Linking routes to the "data" sources

var matchData = require("../data/matches");

// ROUTING

module.exports = function(app) {
	
	// API GET Requests
	// This code handles when a user "visits" a link.
	// ex. localhost:PORT/api/matches will show a JSON of the data from matches
	app.get("/api/matches", function(req, res) {
	res.jason(matchData);
});

	// API POST Requests
	// This code handles when a user submits a form, which submits the data to the server. When user submits form data (a JSON object)
	// ...the JSON is pushed to the correct array
	// Then the server saves the data to the matchArray
	app.post("/api/matches", function(req, res) {
	// Note the code here. The server will respond to requests
	// Push data to array
		matchData.push(req.body);
		res.json(true);
	});
};
