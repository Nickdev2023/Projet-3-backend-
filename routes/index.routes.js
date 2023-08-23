const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/exercices", require("./exercices.routes"));
router.use("/workouts", require("./workout.routes"));
router.use("/profil", require("./profil.routes"));

module.exports = router;
