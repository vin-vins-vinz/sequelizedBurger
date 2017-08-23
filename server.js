//install npm packages
var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");
var db = require("./models");
var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

//Setup Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Setup routes in server
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/createburgers", routes);
app.use("/devouredburger", routes);

//setup localhost port to listen
var port = process.env.PORT || 8888;
db.sequelize.sync().then(function() {
    app.listen(port);
});

console.log(module.exports);