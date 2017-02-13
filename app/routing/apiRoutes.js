// requiring friend file data
var friend = require("../data/friends");

// routing
module.exports = function(app) {

  // JSON of all friends through GET route
  app.get("/api/friends", function(req, res){
    res.json(friend);
  });

  // route that handles POST of new survey results
  app.post("/api/friends", function(req, res){
    var newSurveyFriend = req.body;

    // pushes new friend to array
    friend.push(newSurveyFriend);

    // variable for most recent user in the friends array
    var newFriend = friend.length-1;
    // sets total difference to 0 before loop
    var totalDifference = 0;
    // giving lowestScore a power level of over 9000 to find out which friend has the lowest difference
    var lowestScore = 9001;
    var closestFriend;
    // loops through the friends list and finds the difference for the newest user
    for (var i = 0; i < friend.length - 1; i++) {
      for (var j = 0; j < 10; j++) {
        // calculates difference between each score
        var diff = friend[i].scores[j] - friend[newFriend].scores[j];
        // gets absolute value of the difference
        diff = Math.abs(diff);
        // calculates total difference for all numbers
        totalDifference = totalDifference + diff;
      }
      // if statement to find the lowest score
      if(totalDifference < lowestScore){
        lowestScore = totalDifference;

        // assigns closestFriend the value of the object with the lowest score
        closestFriend = friend[i];
      }
      // resets difference back to 0 after finding the score
      totalDifference = 0;
    }
    // displays the best matched friend in JSON form
    res.json(closestFriend);
    });
};
