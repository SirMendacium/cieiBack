require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const routes = require("./routes");
const { sequelize } = require("./models");
const morgan = require("morgan");
const errorHandler = require("./middlewares/errorHandler");

sequelize.sync({ force: true }).then(async () => {
  await require("./seeders")();
});
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server ready");
});
