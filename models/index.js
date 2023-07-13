const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("elearning", "nacho", process.env.password, {
    host: "localhost",
    dialect: "mysql",
});

const User = require("./User")(sequelize, Model, DataTypes);



module.exports = {
    sequelize, 
    User
}