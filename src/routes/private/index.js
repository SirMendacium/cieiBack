const { expressjwt } = require("express-jwt");
const { Router } = require("express");

const userRouter = require("./user.routes");
const carnedRouter = require("./carned.routes");

const router = Router();

router.use(
  expressjwt({ secret: process.env.JWT_SECRET, algorithms: ["HS256"] })
);

router.use("/users", userRouter);
router.use("/carned", carnedRouter);

module.exports = router;
