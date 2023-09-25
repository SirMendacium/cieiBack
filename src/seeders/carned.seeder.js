const { Carned } = require("../models");

module.exports = async () => {
  const carneds = [];

  carneds.push({
    subject: "Math",
    score: 1,
    student: "María Pérez",
    text: "asd",
    createdAt: new Date("08-06-2020"),
  });

  carneds.push({
    subject: "Fisica",
    score: 1,
    student: "María Pérez",
    text: "asd",
    createdAt: new Date("08-06-2020"),
  });

  carneds.push({
    subject: "asdasd",
    score: 1,
    student: "María Pérez",
    text: "asd",
  });

  await Carned.bulkCreate(carneds);

  console.log("[Database] Se corrió el seeder de Carneds.");
};
