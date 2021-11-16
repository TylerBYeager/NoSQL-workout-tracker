# NoSQL: Workout Tracker
# Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests) (not available in this project)
  * [Questions](#questions)
  
  ## Description  
  This is a Workout/Fitness Tracker built using NoSQL (Mongodb & Mongoose) on the back end. User's are able to create workouts comprised of multiple resistance or cardio exercises. The app takes the input information and provides total stats back to the user. 

![Snapshot1](https://raw.githubusercontent.com/TylerBYeager/NoSQL-workout-tracker/main/public/images/Snapshot1.png)

  ## Code Snippets
  Here are some code snippets and what they accomplished. This first snippet is the models/Workout.js file. This is what I used to create my Workouts model that included exercises. This utilized mongoose in order to create the schema as this is a NoSQL project. 
  ```
    const mongoose = require("mongoose");
    const Schema = mongoose.Schema;

    const WorkoutSchema = new Schema({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: {
                type: String,
                trim: true,
                required: true
            },
            name: {
                type: String,
                trim: true,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }]
    });

    const Workout = mongoose.model("Workout", WorkoutSchema);

    module.exports = Workout;
  ```

  This second snippet is the routes/html.js file. This small amount of code is what I used to correctly navigate between the various html files found within the public directory. These paths are required within server.js to complete the functionality. 
  ```
    const router = require("express").Router();
    const path = require("path");

    router.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    router.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    module.exports = router
  ```

  The third snippet is a bit from the routes/api.js file. These are the put and post routes used to create new workouts or add new exercises to existing workouts. 
  ```
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
  ```

  ## Installation
  To install:
  ```
  Once you have a working SSH key added to your Github account, go to the NoSQL-workout-tracker repository. Click the green "code" button on the top right and clonecopy the @github.com link with the SSH key option to your clipboard. 
  ```

  Next, 
  ```
  Open Gitbash or Terminal and navigate to a directory that you would like to add the cloned repository. Once in your desired directory type in
  "git clone 'right click to paste'" and press enter. This will clone the repository onto your personal machine.
  ```

  Lastly, 
  ```
  Type 'ls' into your Gitbash or Terminal to see a list of items within the directory. If you have done the previous steps correctly then you should see a respository titled "NoSQL-workout-tracker". Simply type in "code ." to open it in your code editor of choice. Lastly, check the package.json file to see the dependencies needed to run this. WIthin your terminal run an npm install.
  ```

  ## Usage
  This app can be used to keep track of one's workouts. Allows a user to check total time spent working out, total weight lifted, and total distance covered for cardio exercises.  
  
 ![Snapshot2](https://raw.githubusercontent.com/TylerBYeager/NoSQL-workout-tracker/main/public/images/Snapshot2.png)

  ## Built With
  * [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [NODE.JS](https://nodejs.org/en/)
  * [EXPRESS.JS](https://expressjs.com/)
  * [CSS](https://www.w3schools.com/css/)
  * [HTML](https://www.w3schools.com/html/)
  * [MONGODB](https://www.mongodb.com/)
  * [MONGOOSE](https://mongoosejs.com/) 

  ## Deployed Link
* [See the Live Site!](https://nosql-workout-tracker1024.herokuapp.com/) 

## Authors

* **Tyler Brian Yeager**

- [Link to Repo Site](https://github.com/TylerBYeager/Handy-Man)
- [Link to My Github](https://github.com/TylerBYeager)
- [Link to My LinkedIn](https://www.linkedin.com/in/tyler-yeager-611926213/)

## Contributions

- UC Berkeley Coding Bootcamp & its Instructor and TA's
- BCS learning assistants & tutors
- Google 

## License
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Questions
- wow_d2@hotmail.com 
