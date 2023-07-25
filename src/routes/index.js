const { Router } = require("express");

const publicRouter = require("./public");
const privateRouter = require("./private");

const router = Router();

router.use(publicRouter);
router.use(privateRouter);

module.exports = router;
