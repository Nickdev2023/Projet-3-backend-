const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const exerciceSchema = new Schema(
  {
    exerciceName: {
      type: String,
      required: [true, "Name of the exercice is required."],
    },
    sets: {
      type: Number,
      default: 4,
      required: true,
    },
    repetition: {
      type: Number,
      default: 12,
      required: true,
    },
    weight: {
      type: Number,
      default: 0,
      required: true,
    },
    exerciceType: {
      type: String,
      enum: ["Polyarticular", "Monoarticular"],
      required: true,
    },
    category: {
      type: String,
      enum: ["Chest", "Shoulders", "Legs", "Back", "Abs"],
      required: true,
    },
    workout: {
      type: Schema.Types.ObjectId,
      ref: "Workouts",
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Exercice = mongoose.model("Exercice", exerciceSchema);

module.exports = Exercice;
