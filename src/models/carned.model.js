module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      alumn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  return User;
};
