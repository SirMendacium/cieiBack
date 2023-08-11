const { Carned } = require("../models");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const carneds = [];

  carneds.push({
    subject: "Matematica",
    score: 2,
    student: "María Pérez",
    text: "Muy mal estudiante",
  });

  await Carned.bulkCreate(carneds);

  console.log("[Database] Se corrió el seeder de Carned.");
};
