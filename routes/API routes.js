var db = require("../models");
module.exports = function(app) {
    // GET ROUTES
    app.get("/api/workouts", function(req, res) {
        db.Workouts.findAll().then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });
    app.get("/api/workouts/range", function(req, res) {
        db.Workouts.findAll().then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });
    // POST ROUTES
    app.post("/api/workouts/", function(req, res) {
        db.Workouts.create(req.body).then(function(response) {
            res.json(response);
        });
    });
    
    // UPDATE ROUTES
    app.put("/api/workouts/:id", function(req, res) {
        let updateWorkout = req.body;
        db.Workouts.update(updateWorkout, { where: { id: req.body.id } }).then(function(result) {
            return res.json(result);
        });
    })
};