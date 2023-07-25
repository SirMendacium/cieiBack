const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers/index");
const { validatorMiddlewareBuilder } = require("../../middlewares/validator");
//const userValidations = require("../../validations/user.validations");
//const { checkRoleAuth } = require("../../middlewares/roleAuth");

router.delete("/", userController.delete);

module.exports = router;
