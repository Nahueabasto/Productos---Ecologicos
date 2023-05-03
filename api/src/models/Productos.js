const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('products', {
    id: {
      type: DataTypes.UUID, //identificador unico universal
      defaultValue: DataTypes.UUIDV4,//MySQL no tiene un tipo UUID navito por lo tanto lo convierte, sequelize proporciona UUIDV1 Y UUIDV4 como valor predeterminado para las columnas de tipo UUID.
      primaryKey: true, //identifica de forma unica cada registro de una tabla,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    linea:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};
