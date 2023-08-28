const router = require("express").Router();
const Exercice = require("../models/exercices.model");
const Workouts = require("./../models/workouts.model");
const Workout = require("./../models/workouts.model");
const getQuery = require("./../utils/index");
router.get("/", async (req, res, next) => {
  try {
    const allWorkouts = await Workout.find();
    res.json(allWorkouts);
  } catch (error) {
    next(error);
  }
});
// {creator: req.payload._id}

router.post("/", (req, res, next) => {
  Workout.create({
    workoutName: req.body.workoutName,
    day: req.body.day,
    duration: req.body.duration,
    category: req.body.category,
    exercice: req.body.exercice,
    creator: req.payload._id,
  })
    .then((createdWorkout) => {
      res.status(201).json(createdWorkout);
    })
    .catch((error) => {
      next(error);
    });
});
router.get("/exercices/:exerciceId", async (req, res, next) => {
  const { exerciceId } = req.query;
  const query = getQuery(exerciceId);
  try {
    const allWorkouts = await Workouts.find(query);
    res.json(allWorkouts);
  } catch (error) {
    next(error);
  }
});

router.get("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;
  console.log("ici", req.payload, workoutId);
  let response = {};
  Workout.findOne({ _id: workoutId, creator: req.payload._id })
    .then((oneWorkout) => {
      console.log(oneWorkout);
      response.workout = oneWorkout;
      return Exercice.find({ workout: oneWorkout._id });
    })
    .then((exercices) => {
      response.exos = exercices;
      res.json(response);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;

  Workout.findOneAndUpdate(
    { _id: workoutId, creator: req.payload._id },
    req.body,
    { new: true }
  )
    .then((updatedWorkout) => {
      res.status(200).json(updatedWorkout);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:workoutId", (req, res, next) => {
  const workoutId = req.params.workoutId;
  Workout.findOneAndDelete(
    { _id: workoutId, creator: req.payload._id },
    req.body,
    { new: true }
  )
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
