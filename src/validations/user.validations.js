const { body } = require("express-validator");

const createUser = [
  body("email").isEmail().withMessage("El email no es valido"),
  body("name").notEmpty().withMessage("El name es requerido"),
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
