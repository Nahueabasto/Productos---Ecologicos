const { Router } = require("express");
const router = Router();
//const { getApi } = require("./info.js");
const { Products } = require("../db.js")
const { newProduct } = require('../controllers/newProduct')
const { getProducts } = require('../controllers/getProducts.js')

// router.get('/products', async (req, res) => {
//     try {
//       // Obtener los productos desde la base de datos
//       const products = await Products.findAll();
  
//       // Si no hay productos en la base de datos, llamar a la función getApi para obtenerlos desde la API
//       if (products.length === 0) {
//         const info = await getApi();
  
//         // Crear los productos en la base de datos
//         await Promise.all(
//           info.map(async (product) => {
//             const [newProduct, created] = await Products.findOrCreate({
//               where: { name: product.name },
//               defaults: product
//             });
//             if (!created) {
//               await newProduct.update(product);
//             }
//           })
//         );
  
//         // Obtener los productos desde la base de datos actualizada
//         const updatedProducts = await Products.findAll();
//         res.status(200).send(updatedProducts);
//       } else {
//         // Si ya hay productos en la base de datos, devolverlos
//         res.status(200).send(products);
//       }
//     } catch (error) {
//       res.status(400).send(error.message);
//     }
//   });

// router.post('/', async (req, res) => {
//     const { name, price, image, stock, details, line, brand } = req.body;
//     try {
//         let result = await newProduct(name, price, image, stock, details, line, brand)
//         res.status(200).send({ result })
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

router.get('/', async (req, res) => {
    try {
        let { name } = req.query;
        const result = await getProducts(name);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error.message)
    }
});
  


module.exports = router;


