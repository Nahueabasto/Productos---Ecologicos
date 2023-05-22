const axios = require("axios");
const { Products, Line, Brand } = require("../db");



const getApi = async () => {
  try {
    const allProducts = await axios.get(
      "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
    );
    const products = allProducts.data.map((el) => {
      return {
        name: el.name,
        images: el.images.join(', '), 
        price: el.price,
        stock: el.stock,
        details: el.details,
        //line: el.line,
        //brand: el.brand,
      };
    });

    console.log('Database Products loaded successfully');

    return products;
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getDb = async () => {
  return await Products.findAll({
    include: Line,
    attributes: ['id', 'name'],
    through: {
      attributes: []
    }
  });
}

const allInfo = async () => {
  try{
  const apiInfo = await getApi();
  const dbInfo = await getDb();
  return apiInfo.concat(dbInfo);
} catch (error) {
  return error;
};
}

module.exports = {
  getApi,
  allInfo,
};
