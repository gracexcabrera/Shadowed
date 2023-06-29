// import parts of sequelize library
const { Model, Dataypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class Profile extends Model {}

Profile.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  //   TBD
});

module.exports = Profile;
