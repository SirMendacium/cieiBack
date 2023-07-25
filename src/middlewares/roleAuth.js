const { user } = require("../models");
const jwt = require("jsonwebtoken");
const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    const userData = await user.findById(decoded.id);
    if ([].concat(roles).includes(userData.role)) {
      next();
    } else {
      res.status(401).json({
        message: "You are not authorized to access this resource",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: "You are not authorized to access this resource",
    });
  }
};

module.exports = {
  checkRoleAuth,
};
