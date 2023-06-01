const { Router } = require("express");
const router = Router();
const { Products, Line, Brand } = require("../db.js")
const { allInfo } = require('../controllers/getProducts.js')

// router.get('/products', async (req, res) => {
//     try {
//       // Obtener los productos desde la base de datos
//       const products = await Products.findAll();
  
//       // Si no hay productos en la base de datos, llamar a la función getApi para obtenerlos desde la API
//       if (products.length === 0) {
//         const info = await allInfo();
  
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




// module.exports = router;
// router.get('/products', async (req, res) => {
//   const {name} = req.query;
//   try {
//     // Obtener los productos desde la base de datos
//     const products = await Products.findAll({
//       include: [
//         { model: Line, attributes: ['id', 'name'] },
//         { model: Brand, attributes: ['id', 'name'] }
//       ]
//     });
//     const result = name
//         ? products.filter((el) =>
//             el.name.toString().toLowerCase().includes(name.toLowerCase())
//           )
//         : products;
//     // Si no hay productos en la base de datos, llamar a la función getApi para obtenerlos desde la API
//     if (products.length === 0) {
//       const info = await allInfo();

//       // Crear los productos en la base de datos
//       await Promise.all(
//         info.map(async (product) => {
//           const [newProduct, created] = await Products.findOrCreate({
//             where: { name: product.name },
//             defaults: product
//           });
//           if (!created) {
//             await newProduct.update(product);
//           }
//         })
//       );

//       // Obtener los productos desde la base de datos actualizada
//       const updatedProducts = await Products.findAll({
//         include: [
//           { model: Line, attributes: ['id', 'name'] },
//           { model: Brand, attributes: ['id', 'name'] }
//         ]
//       });
//       res.status(200).send(updatedProducts);
//     } else {
//       // Si ya hay productos en la base de datos, devolverlos
//       res.status(200).send(products);
//     }
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// module.exports = router;
const { Op } = require('sequelize');

router.get('/products', async (req, res) => {
  const { name } = req.query;
  try {
    // Obtener los productos desde la base de datos
    let products = await Products.findAll({
      include: [
        { model: Line, attributes: ['id', 'name'] },
        { model: Brand, attributes: ['id', 'name'] }
      ]
    });

    // Filtrar productos por nombre si se especifica en la consulta
    if (name) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // Si no hay productos en la base de datos, llamar a la función getApi para obtenerlos desde la API
    if (products.length === 0) {
      const info = await allInfo();

      // Crear los productos en la base de datos
      await Promise.all(
        info.map(async (product) => {
          const [newProduct, created] = await Products.findOrCreate({
            where: { name: product.name },
            defaults: product
          });
          if (!created) {
            await newProduct.update(product);
          }
        })
      );

      // Obtener los productos desde la base de datos actualizada
      products = await Products.findAll({
        include: [
          { model: Line, attributes: ['id', 'name'] },
          { model: Brand, attributes: ['id', 'name'] }
        ]
      });
    }

    // Devolver los productos
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;



