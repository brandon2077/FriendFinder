// LOAD DATA
// Linking routes to the "data" sources

var matchData = require("../data/matches");

// ROUTING

module.exports = function(app) {
	
	// API GET Requests
	// This code handles when a user "visits" a link.
	// ex. localhost:PORT/api/matches will show a JSON of the data from matches
	app.get("/api/matches", function(req, res) {
	res.json(matchData);
	});

	// API POST Requests
	// This code handles when a user submits a form, which submits the data to the server. When user submits form data (a JSON object)
	// ...the JSON is pushed to the correct array
	// Then the server saves the data to the matchArray
	app.post("/api/matches", function(req, res) {
	// Note the code here. The server will respond to requests
	// Push data to array
		// if (matchData.length < 20) {
		// matchData.push(req.body);
		// res.json(true);
		// }
		// else {
		// res.json(false);
		// }
		
		var bestMatches = {
			name: "",
			photo: "",
			friendDifference: 20 // Tracks the difference between answers
		};

		// Take in the result of the user's survey POST and parse it
		var newSurvey = req.body;
		var newScores = newSurvey.scores;
		
		// Calculate the toal difference in between the user's score and the scores of each user in the database
		var totalDifference = 0;
		
		// Loop through the match data
		for (var i = 0; i < matchData.length; i++) {
		
			console.log(matchData[i]);
			totalDifference = 0;

			// Loop through the matchData scores
			for (var j = 0; j < matchData[i].scores[j]; j++) {
				totalDifference += Math.abs(parseInt(newScores[j]) - parseInt(matchData[i].scores[j]));
				// iF the sum is htess than difference of the current best match
				if (totalDifference <= bestMatches.friendDifference) {
					
					// Push it to bestMatches
					bestMatches.name = matchData[i].name;
					bestMatches.photo = matchData[i].photo;
					bestMatches.friendDifference = totalDifference;
				}
			};
		};

		// Save the userdata to the db
		// Will return the user's best friend
		matchData.push(newSurvey);

		
		
		// Return the JSON for the best match that will be used in HTML
		res.json(bestMatches);	
	
	});

};
