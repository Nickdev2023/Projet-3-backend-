const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/exercices", require("./exercices.routes"));
router.use("/workouts", require("../models/workouts.model"));
router.use("/profil", require("../models/profil.model"));
module.exports = router;
