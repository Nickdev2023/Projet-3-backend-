const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// Add isAuthenticated
router.use("/signup", require("./auth.routes.js"));
router.use(isAuthenticated);
router.use("/exercices", require("./exercices.routes"));
router.use("/workouts", require("./workout.routes"));
router.use("/profil", require("./profil.routes"));

module.exports = router;
