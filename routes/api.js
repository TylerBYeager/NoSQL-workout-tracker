const router = require("express").Router();
const path = require("path");
const db = require("../models");

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.status(200).json(data);
    } catch (err) {
        console.log("error", err);
        res.status(404).json(err);;
    }
});

router.get("/api/workouts/range", async ({}, res) => {
    try {
        const data = await db.Workout.find({})
        res.status(200).json(data);
    } catch (err) {
        console.log("error", err);
        res.status(404).json(err);
    }
});

router.put("/api/workouts/:id", async (req, res) => {
    try {
        const data = await db.Workout.findByIdAndUpdate(req.params.id, 
            {$push: {exercises: req.body}});
            if (!data) {
                res.status(404).json("Exercise doesn't exist");
            } else {
                res.status(200).json(data);
            }
    } catch (err) {
        console.log("error", err);
        res.status(404).json(err);
    }
});

router.post("/api/workouts", async (req, res) => {
    try {
    const data = await db.Workout.create(req.body);
    res.status(200).json(data);
    } catch (err) {
        console.log("error", err);
        res.status(404).json(err);
    }
});

module.exports = router;