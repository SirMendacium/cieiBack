const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers/");
const { validatorMiddlewareBuilder } = require("../../middlewares/validator");
const userValidations = require("../../validations/user.validations");

router.post(
  "/signup",
  validatorMiddlewareBuilder(userValidations.createUser),
  userController.register
);
router.post(
  "/login",
  validatorMiddlewareBuilder(userValidations.login),
  userController.login
);

module.exports = router;
