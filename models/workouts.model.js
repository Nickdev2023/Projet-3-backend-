const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const workoutsSchema = new Schema(
  {
    workoutName: {
      type: String,
      required: [true, "Name of the workout is required."],
    },
    day: {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      required: true,
    },
    duration: {
      type: Number,
      default: 60,
    },
    category: {
      type: String,
      enum: ["Chest", "Shoulders", "Legs", "Back", "Abs"],
      required: true,
    },
    exercice: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercice",
      },
    ],
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
