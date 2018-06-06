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
	// Then the server saves the data 
	app.post("/api/matches", function(req, res) {
		
		// totalDifference will hold the value of the SUM of the DIFFERENCES between the values in the new users' score arrays and the existing users' scores arrays
		var totalDifference = 0;
		
		// Using body-parser, take in the result of the user's survey POST and parse it
		var newSurvey = req.body;

		// bestMatches is the object that  will hold the data returned after calculating the best match below
		var bestMatches = {
			name: "",
			photo: "",
			matchedScore: 20 
		};
						
		// Loop through the existing user data
		for (var i = 0; i < matchData.length; i++) {
	
			// Display the existing users for debugging 
			console.log(matchData[i]);
			totalDifference = 0;

			// Loop through the score arrays of the existing users 
			for (var j = 0; j < matchData[i].scores[j]; j++) {
				
				// Get the new users' scores by their array index(newSurvey.scores[j])
				// Get the existing users' scores by their index(matchData[i].scores[j])
				// Calculate the difference between them
				// Use Math.abs() to turn negative numbers to positives
				// Add the difference to the sum of totalDifference
				totalDifference += Math.abs(parseInt(newSurvey.scores[j]) - parseInt(matchData[i].scores[j]));
				// If the sum is less than difference of the current best match
				if (totalDifference < bestMatches.matchedScore) {
					
					// Push data to the "bestMatches" object and display it to the user
					bestMatches.name = matchData[i].name;
					bestMatches.photo = matchData[i].photo;
					bestMatches.matchedScore = totalDifference;
				}
			}; // End of existing score loop
		}; // End of existing user loop

		// Push the new user to the database 
		matchData.push(newSurvey);

		// Return the JSON for the best match that will be used in HTML
		res.json(bestMatches);	
	
	}); // End of AJAX post

}; // End of module.export
