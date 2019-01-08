var express = require("express");
var app = express();
var htRoute = require("./routing/htmlRoutes");

var PORT = process.env.PORT || 3113;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use("/", htRoute);
app.use("/survey", htRoute);
require("./routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("Application is listening on PORT " + PORT);
});