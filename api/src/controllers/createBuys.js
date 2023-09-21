const { User, Product, Buys } = require("../db");

const createBuys = async function (productId, userId) {

    if (!productId || !userId) {
        throw new Error('Debes proporcionar productId y userId.');
      }
      
      // Crea una nueva entrada en la tabla Buys
      const newBuys = await Buys.create({
        productId,
        userId,
      });
    
      return newBuys;
    };


module.exports = { createBuys };

