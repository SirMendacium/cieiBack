const express = require("express");
const router = express.Router();
const { carnedController, userController } = require("../../controllers");
const { validatorMiddlewareBuilder } = require("../../middlewares/validator");
const carnedValidations = require("../../validations/carned.validations");
const { checkRoleAuth } = require("../../middlewares/roleAuth");

router.post(
  "/",
  validatorMiddlewareBuilder(carnedValidations.createCarned),
  carnedController.create
);
router.get("/", carnedController.getAll);
router.get("/myCarned", userController.getMyCarned);
module.exports = router;
