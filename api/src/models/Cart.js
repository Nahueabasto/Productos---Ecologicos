const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('cart', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    productId: {
     type: DataTypes.INTEGER,
    allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
