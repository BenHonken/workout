var db = require("../models");
module.exports = function(app) {
    // GET ROUTES
    app.get("/api/user/", function(req, res) {
        db.Users.findOne({
            where: {
                id: req.user.id
            }
        }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });
    app.get("/api/students", function(req, res) {
        db.Users.findAll({
            where: {
                tutor_id: req.user.id
            }
        }).then(function(dbStudents) {
            res.json(dbStudents);
        });
    });
    // POST ROUTES
    app.post("/api/profile", function(req, res) {
        db.Users.create(req.body).then(function(response) {
            console.log("after insert:");
            //console.log(response);
            res.json(response);
        });
    });
    
    // UPDATE ROUTES
    app.put("/api/student_hours/", function(req, res) {
        console.log("student hours route hit");
        let updateStudent = {
            hours: req.body.hours
        }
        db.Users.update(updateStudent, { where: { id: req.body.id } }).then(function(result) {
            return res.json(result);
        });
    })
};