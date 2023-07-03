const axios = require("axios");
const { Products, Line, Brand } = require("../db");



const getApi = async () => {
  try {
    const allProducts = await axios.get(
      "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
    );
    const uniqueLines = [...new Set(allProducts.data.map((el) => el.line))];
    const linePromises = uniqueLines.map(async (line) => {
      const lineObj = await Line.findOne({ where: { name: line } });
      return lineObj || Line.create({ name: line });
    });
    const lines = await Promise.all(linePromises);

    const products = await Promise.all(
      allProducts.data.map(async (el) => {
        const lineName = el.line;
        const line = lines.find((lineObj) => lineObj.name === lineName);

        const product = await Products.create({
          name: el.name,
          images: el.images.join(", "),
          price: el.price,
          stock: el.stock,
          details: el.details,
          size: el.size,
        });

        // Asociar con la linea!
        if (line) {
          await product.addLine(line);
        }

        return product;
      })
    );

    console.log("Database Products loaded successfully");

    return products;
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getDb = async () => {
  try {
    const products = await Products.findAll({
      include: Line, // Include the associated Line model
      attributes: ['id', 'name', 'price', 'stock', 'size', 'details', 'images'], // Specify the desired attributes
    });

    console.log('Products loaded successfully');

    return products;
  } catch (error) {
    console.log(error);
    res.send(error);
  }
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
