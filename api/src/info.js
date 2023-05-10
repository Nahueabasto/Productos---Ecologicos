const axios = require("axios");
const { Products, Line } = require("./db");
const { newProduct } = require('./controllers/newProduct')

const getApi = async () => {
  try {
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
    products.forEach(async (e) => {
        
      let  {name, price, image, stock, details, line, brand} = e
      newProduct(name, price, image, stock, details, line, brand)
}
  );
  
  console.log('Database Products loaded successfully')
} catch (error) {
  console.log(error)
  res.send(error);
}
}


module.exports = {
    getApi,
  };