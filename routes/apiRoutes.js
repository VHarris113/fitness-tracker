const router = require("express").Router();
const Workout = require("../models").Workout;


router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
   });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true }
    ).then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("/api/workouts/", (req, res) => {
    Workout.create({
        day: Date.now()
    })
    .then((dbWorkout) => {
        res.json(dbWorkout);
        console.log("New workout created!", dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;