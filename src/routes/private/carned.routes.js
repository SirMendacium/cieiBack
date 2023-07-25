const express = require("express");
const router = express.Router();
const { carnedController } = require("../../controllers");
//const { validatorMiddlewareBuilder } = require("../../middlewares/validator");
//const userValidations = require("../../validations/user.validations");
const { checkRoleAuth } = require("../../middlewares/roleAuth");

router.post("/", checkRoleAuth("profesor"), carnedController.create);

module.exports = router;
