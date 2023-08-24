const router = require("express").Router();
const Exercice = require("./../models/exercices.model");
const getQuery = require("./../utils/index");
const Workout = require("./../models/workouts.model");
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.get("/", async (req, res, next) => {
  try {
    const allExercices = await Exercice.find();
    res.json(allExercices);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  Exercice.create({
    exerciceName: req.body.exerciceName,
    sets: req.body.sets,
    repetition: req.body.repetition,
    weight: req.body.weight,
    exerciceType: req.body.exerciceType,
    category: req.body.category,
    workout: req.body.workout,
    creator: req.payload._id,
  })
    .then((createdExercice) => {
      res.status(201).json(createdExercice);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/workouts/:workoutId", async (req, res, next) => {
  const { workoutId } = req.query;
  const query = getQuery(workoutId);
  try {
    const allExercices = await Exercice.find(query);
    res.json(allExercices);
  } catch (error) {
    next(error);
  }
});

router.get("/:exerciceId", (req, res, next) => {
  const exerciceId = req.params.exerciceId;

  Exercice.findOne({ _id: exerciceId, creator: req.payload._id })
    .populate("workout")
    .then((oneExercice) => {
      console.log(oneExercice);
      res.status(200).json(oneExercice);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:exerciceId", (req, res, next) => {
  const exerciceId = req.params.exerciceId;
  Exercice.findOneAndUpdate(
    { _id: exerciceId, creator: req.payload._id },
    req.body,
    { new: true }
  )
    .then((updatedExercice) => {
      res.status(200).json(updatedExercice);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:exerciceId", (req, res, next) => {
  const exerciceId = req.params.exerciceId;
  Exercice.findOneAndDelete(
    { _id: exerciceId, creator: req.payload._id },
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
