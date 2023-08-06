const { Carned } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  create: async (req, res, next) => {
    try {
      const carned = await Carned.create({
        subject: req.body.subject,
        teacher: req.body.teacher,
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
