const { User, Carned } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

console.log(User);
module.exports = {
  register: async (req, res, next) => {
    try {
      const newUser = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      });
      const jwtPayload = {
        sub: newUser.id,
      };

      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);
      res.status(201).json({
        user: {
          email: newUser.email,
          id: newUser.id,
          firstname: newUser.firstname,
          lastname: newUser.lastname,
        },
        token: token,
      });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      //check if there is a user with that password and email
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!user) {
        res.status(401).send("User not found");
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(401).send("Invalid password");
      }
      const jwtPayload = {
        sub: user.id,
      };
      const token = jwt.sign(jwtPayload, process.env.JWT_SECRET);

      res.status(200).json({
        user: {
          email: user.email,
        },
        token: token,
      });
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const token = req.headers.authorization.substr(
        req.headers.authorization.indexOf(" ") + 1
      );
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      await User.destroy({
        where: {
          id: decoded.sub,
        },
      });
      if (!user) {
        res.send(403);
      }
      res.status(200);
    } catch (err) {
      next(err);
    }
  },
  getMyCarned: async (req, res, next) => {
    try {
      const token = req.headers.authorization.substr(
        req.headers.authorization.indexOf(" ") + 1
      );

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);
      const user = await User.findOne({
        where: {
          id: decoded.sub,
        },
      });
      console.log(user);
      const carned = await Carned.findAll({
        where: {
          student: user.firstname + " " + user.lastname,
        },
      });
      console.log(carned);
      res.json(carned);
      res.status(200);
    } catch (err) {
      next(err);
    }
  },
};
