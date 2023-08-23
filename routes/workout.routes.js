const router = require("express").Router();
const Workout = require("./../models/workouts.model");

router.get("/", async (req, res, next) => {
  try {
    const allWorkouts = await Workout.find();
    res.json(allWorkouts);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  Workout.create({
    workoutName: req.body.workoutName,
    day: req.body.day,
    duration: req.body.duration,
    category: req.body.category,
  })
    .then((createdWorkout) => {
      res.status(201).json(createdWorkout);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;

  Workout.findById(workoutId)
    .then((oneWorkout) => {
      console.log(oneWorkout);
      res.status(200).json(oneWorkout);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;

  Workout.findByIdAndUpdate(workoutId, req.body, { new: true })
    .then((updatedWorkout) => {
      res.status(200).json(updatedWorkout);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;
  Workout.findByIdAndDelete(workoutId)
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
