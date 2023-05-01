const axios = require("axios");
const { Products, Linea } = require("../../db");


const getApi = async() => {
  
    const allProducts = await axios.get(
      "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
    );
    const info = allProducts.data.map((el) => {
      return {
        id: el.id,
        name: el.name,
        image: el.image,
        price: el.price,
        stock: el.stock,
        details: el.details,
        linea: el.linea,
        marca: el.marca,
      };
    });
    return info;
}  

module.exports = {
    getApi,
  };
  