const { Router } = require("express");
const router = Router();

const axios = require('axios')
const { Products, Line, Brand, } = require('../db')

router.get("/products/:id", async (req, res) => {
    try {
    const { id } = req.params;
      const productsDb = await Products.findOne({
        where: {
          id: id,    
        },
        include: {
          model: Line,
          through:{
            attributes: [],
          },
        },
          attributes: ["id", "name", "price", "stock", "details", "images" ],
  
    });
    if (productsDb) {
      return res.json(productsDb);
    } else {
      throw new Error("Products no encontrado");
    }
  } catch (e) {
    res.status(404).json("-");
  }
  });

  module.exports = router;