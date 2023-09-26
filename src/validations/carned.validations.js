const { body } = require("express-validator");

const createCarned = [
  body("score").notEmpty().withMessage("El score no es valido"),
  body("student").notEmpty().withMessage("El student es requerido"),
  // body("subject").notEmpty().withMessage("El subject es requerido"),
  body("text").notEmpty().withMessage("El text es requerido"),
];

module.exports = {
  createCarned,
};
