// import parts of sequelize library
const { Model, Dataypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
//   TBD
});

module.exports = User;
