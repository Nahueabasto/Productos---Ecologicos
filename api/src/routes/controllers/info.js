const axios = require("axios");
const { Products, Line } = require("../../db");


// const getApi = async () => {
//   try {
//     const allProducts = await axios.get(
//       "https://6449bfc1a8370fb3213d256e.mockapi.io/api/products"
//     );
//     const info = allProducts.data.map((el) => {
//       return {
//         name: el.name,
//         image: el.image,
//         price: el.price,
//         stock: el.stock,
//         details: el.details,
//         linea: el.linea,
//         marca: el.marca,
//       };
//     });
    
//     await Promise.all(info.map(async (product) => {
//       const [newProduct, created] = await Products.findOrCreate({
//         where: { name: product.name },
//         defaults: product
//       });
      
//       if (!created) {
//         await newProduct.update(product);
//       }
//     }));

//     console.log("Products saved successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// };

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
        linea: el.linea,
        marca: el.marca,
      };
    });
return products;
};


module.exports = {
    getApi,
  };
  