// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page host domain


// Displays all characters not dispay but the character info to your computer send the object


// Create New Characters - takes in JSON input

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});