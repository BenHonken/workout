// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Requiring compression
var compression = require('compression');

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Use compression
app.use(compression());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);


var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });