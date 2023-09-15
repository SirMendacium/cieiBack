const { body } = require("express-validator");

const createUser = [
  body("email").isEmail().withMessage("El email no es valido"),
  body("firstname").notEmpty().withMessage("El firstname es requerido"),
  body("lastname").notEmpty().withMessage("El lastname es requerido"),

  body("password").notEmpty().withMessage("El password es requerido"),
];

const login = [
  body("email").isEmail().withMessage("El email no es valido"),
  body("password").notEmpty().withMessage("El password es requerido"),
];

module.exports = {
  createUser,
  login,
};
