const bcrypt = require("bcryptjs");

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      //I want that the only options to put in the field "role" be root, user and admin

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "student",
        validate: {
          isIn: [["admin", "teacher", "student"]],
        },
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
      sequelize,
      modelName: "user",
    }
  );

  return User;
};
