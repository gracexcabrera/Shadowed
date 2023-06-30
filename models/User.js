// import parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

const bcrypt = require('bcrypt');

class User extends Model {
  checkpassword(attempted) {
    return bcrypt.compareSync(attempted, this.password);
  }
}

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
    hooks: {
      beforeCreate: async (newuserdata) => {
        newuserdata.password = await bcrypt.hash(newuserdata.password, 10);
        return newuserdata;
      },
      beforeUpdate: async (updateduserdata) => {
        updateduserdata.password = await bcrypt.hash(updateduserdata.password, 10);
        return updateduserdata;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
