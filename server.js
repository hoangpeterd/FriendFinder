// dependecies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express configuration
// tells node that an express server is being created
var app = express();
// set an intial port that we'll use later in our listener
var PORT = process.env.PORT || 8000;

// body parser makes it possible for the server to interpret data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// points our server to a series of route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener that starts server
app.listen(PORT, function() {
  console.log("App listenting on PORT: " + PORT);
});
