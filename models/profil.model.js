const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profilSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 18,
      required: true,
    },
    currentWeight: {
      type: Number,
      default: 0,
      required: true,
    },
    goalWeight: {
      type: Number,
      default: 0,
      required: true,
    },
    height: {
      type: Number,
      default: 175,
      required: true,
    },
    sex: {
      type: String,
      enum: ["Male", "Female"],
    },
    physicalActivityLevel: {
      type: String,
      enum: [
        "Extremely inactive",
        "Sedentary",
        "Moderately active",
        "Vigorously active",
        "Extremely active",
      ],
    },
    dailyCalories: {
      type: Number,
      default: 2000,
      required: true,
    },
    fitnessLevel: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
    },
    numberOfTraining: {
      type: Number,
      default: 4,
    },
    bodyGoal: {
      type: String,
      enum: ["Loose fat", "Gain muscle"],
    },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Profil = mongoose.model("Profil", profilSchema);

module.exports = Profil;
