const axios = require("axios");
const { Products, Line } = require("../../db");


const getApi = async () => {

    const allProducts = await axios.get(
      "https://64504b8dba9f39c6ab7711e4.mockapi.io/api/products"
    );
    const products = allProducts.data.map((el) => {
      return {
        name: el.name,
        image: el.image,
        price: el.price,
        stock: el.stock,
        details: el.details,
        line: el.line,
        brand: el.brand,
      };
    });
return products;
};


module.exports = {
    getApi,
  };