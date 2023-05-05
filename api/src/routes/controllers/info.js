const axios = require("axios");
const { Products, Line } = require("../../db");


const getApi = async () => {

    const allProducts = await axios.get(
      "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
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