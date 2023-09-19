const { Router } = require("express");
const router = Router();

const axios = require('axios')
const { Products, Line, Brand, Review } = require('../db')
const { ProductController } = require('../controllers/ProductController,js');

router.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params.id;

    const product = await Products.findOne({
      where: {
        id: id,    
      },
      include: {
        model: Line,
        through:{
          attributes: [],
        },
      },
      attributes: ["id", "name", "price", "stock", "size", "details", "images"],
    });

    if (product) {
      return res.json(product);
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    res.status(404).json("You messed up, Lu");
  }
  });

  module.exports = router;

// router.get("/products/:id/promedio-rating", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Agrega el cálculo del promedio de rating
//     const averageRating = await Review.findOne({
//       attributes: [
//         [sequelize.fn("AVG", sequelize.col("rating")), "averageRating"]
//       ],
//       where: {
//         productId: id
//       }
//     });

//     if (averageRating) {
//       return res.json({ averageRating: averageRating.averageRating });
//     } else {
//       throw new Error("Product not found or no ratings available");
//     }
//   } catch (error) {
//     res.status(404).json("You messed up, Lu");
//   }
// });

