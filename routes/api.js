const router = require("express").Router();
const path = require("path");

router.get("/api/workouts", async (req, res) => {
    try {
        const data = await db.Workout.find({});
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
});



module.exports = router;