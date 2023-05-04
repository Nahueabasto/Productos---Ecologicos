const { Router } = require("express");
const router = Router();
const { getApi } = require("./controllers/info.js");
const { Products } = require("../db.js")


router.get('/products', async (req, res) => {
    try {
      // Obtener los productos desde la base de datos
      const products = await Products.findAll();
  
      // Si no hay productos en la base de datos, llamar a la función getApi para obtenerlos desde la API
      if (products.length === 0) {
        const info = await getApi();
  
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
        const updatedProducts = await Products.findAll();
        res.status(200).send(updatedProducts);
      } else {
        // Si ya hay productos en la base de datos, devolverlos
        res.status(200).send(products);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
  });
  


module.exports = router;


