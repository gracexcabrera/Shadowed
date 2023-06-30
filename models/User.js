// import parts of sequelize library
const { Model, Dataypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.INTEGER,
      allNull: false,
    },
    password: {
      type: DataTypes.INTEGER,
      allNull: false,
    },
    email: {
      type: DataTypes.INTEGER,
      allNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
