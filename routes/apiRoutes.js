const router = require("express").Router();
const db = require("../models");


router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
   });
});

router.get("/api/workouts/range", ({}, res) => {
        db.Workout.find({}).then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body).then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        { _id: req.params.id }, { exercises: req.body }
    ).then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
