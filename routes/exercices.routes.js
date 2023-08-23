const router = require("express").Router();
const Exercice = require("./../models/exercices.model");

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
  })
    .then((createdExercice) => {
      res.status(201).json(createdExercice);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:exerciceId", (req, res, next) => {
  const exerciceId = req.params.exerciceId;

  Exercice.findById(exerciceId)
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
  Exercice.findByIdAndUpdate(exerciceId, req.body, { new: true })
    .then((updatedExercice) => {
      res.status(200).json(updatedExercice);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:exerciceId", (req, res, next) => {
  const exerciceId = req.params.exerciceId;
  Exercice.findByIdAndDelete(exerciceId)
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
