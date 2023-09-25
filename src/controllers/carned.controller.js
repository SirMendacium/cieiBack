const { Carned, User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (req, res, next) => {
    try {
      const token = req.headers.authorization.substr(
        req.headers.authorization.indexOf(" ") + 1
      );
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { id: decoded.sub } });
      console.log(user.dataValues);

      const carned = await Carned.create({
        subject: req.body.subject,
        teacher: user.dataValues.firstname + " " + user.dataValues.lastname,
        text: req.body.text,
        score: req.body.score,
        student: req.body.student,
      });

      res.json(carned);
    } catch (err) {
      next(err);
    }
  },

  getAll: async (_, res, next) => {
    try {
      const carneds = await Carned.getAll();
      res.json(carneds);
    } catch (err) {
      next(err);
    }
  },
};
