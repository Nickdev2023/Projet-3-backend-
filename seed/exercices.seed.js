require("dotenv").config();
const Exercie = require("../models/exercices.model");
require("./../db/index");

const Exercie = [
  new Exercie({
    exerciceName: "Chest press",
    sets: "4",
    repetition: "12",
    weight: "100",
    exerciceType: "Polyarticular",
    category: "Chest",
  }),
  new Exercie({
    exerciceName: "Chest dumbell",
    sets: "4",
    repetition: "12",
    weight: "50",
    exerciceType: "Polyarticular",
    category: "Chest",
  }),
  new Exercie({
    exerciceName: "Chest barre",
    sets: "4",
    repetition: "12",
    weight: "10",
    exerciceType: "Polyarticular",
    category: "Chest",
  }),
];
