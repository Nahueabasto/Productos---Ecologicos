const { Router } = require('express');
const { Line, Products } = require("../db");
//const { api } = require("./infoApis")
const router = Router();  


router.get("/:lineParam", async (req, res) => {
  let lineParam = req.params.lineParam;

  

  try {
    const products = await Products.findAll({
      include: [
        { model: Line, attributes: ['id', 'name'] },
      ],
      attributes: ['id', 'name', 'price', 'stock', 'size', 'details', 'images']
    });

    // Filter products by line name if specified in the query
    const filteredProducts = products.filter((product) =>
      product.lines.some((lineObj) => lineObj.name.toLowerCase().replace(/\s/g, '-') === lineParam.toLowerCase())
    );

    if (filteredProducts.length === 0) {
      return res.status(404).json({ error: "No products to show for that line!" });
    }

    res.status(200).json(filteredProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;