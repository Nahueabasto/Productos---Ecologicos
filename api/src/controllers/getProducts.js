const axios = require("axios");
//const { Products, Line } = require("./db");
//const { newProduct } = require('./controllers/newProduct')


const getApi = async () => {
  try {
    const allProducts = await axios.get(
      "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
    );
    const products = allProducts.data.map((el) => {
      const imagesString = el.images.map((image) => `"${image}"`).join(', ');
      return {
        name: el.name,
        images: imagesString,
        price: el.price,
        stock: el.stock,
        details: el.details,
        line: el.line,
        brand: el.brand,
      };
    });

    console.log('Database Products loaded successfully');

    return products;
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  getApi,
};
