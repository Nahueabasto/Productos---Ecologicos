const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('Buys', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    });
  };
