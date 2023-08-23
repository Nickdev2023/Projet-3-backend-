const router = require("express").Router();
const Profil = require("./../models/profil.model");

router.get("/", async (req, res, next) => {
  try {
    const allProfils = await Profil.find();
    res.json(allProfils);
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  Profil.create({
    name: req.body.name,
    age: req.body.age,
    currentWeight: req.body.currentWeight,
    goalWeight: req.body.goalWeight,
    height: req.body.height,
    sex: req.body.sex,
    physicalActivityLevel: req.body.physicalActivityLevel,
    dailyCalories: req.body.dailyCalories,
    fitnessLevel: req.body.fitnessLevel,
    numberOfTraining: req.body.numberOfTraining,
    bodyGoal: req.body.bodyGoal,
  })
    .then((createdProfil) => {
      res.status(201).json(createdProfil);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:profilId", (req, res, next) => {
  const profilId = req.params.profilId;

  Profil.findById(profilId)
    .then((oneProfil) => {
      console.log(oneProfil);
      res.status(200).json(oneProfil);
    })
    .catch((error) => {
      next(error);
    });
});

router.put("/:profilId", (req, res, next) => {
  const profilId = req.params.profilId;
  Profil.findByIdAndUpdate(profilId, req.body, { new: true })
    .then((updatedProfil) => {
      res.status(200).json(updatedProfil);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:profilId", (req, res, next) => {
  const profilId = req.params.profilId;
  Profil.findByIdAndDelete(profilId)
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
