var path = require("path");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {

        res.sendFile(path.join(__dirname, "../index.html"));

    });
    app.get("/exercise", function(req, res) {

        res.sendFile(path.join(__dirname, "../exercise.html"));
    });
    app.get("/stats", function(req, res) {

        res.sendFile(path.join(__dirname, "../stats.html"));
    });
};