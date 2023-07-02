const { Router } = require('express');
const { Line, Products } = require("../db");
//const { api } = require("./infoApis")
const router = Router();


router.get('/:line', async (req, res) => {
  const { line } = req.params;

  try {
  let products = await Products.findAll({
    include: [
      { model: Line, attributes: ['id', 'name'] },
      { model: Brand, attributes: ['id', 'name'] }
    ]
  });

  // Filtrar productos por línea si se especifica en la consulta
  if(line) {
    products = products.filter((product) =>
      product.line.toLowerCase().includes(line.toLowerCase())
    );
    if (products.length === 0) {
      return res.status(404).json({ error: "No products to show for that line!" });
    }
  } else {
    return res.status(400).json({ error: "Line parameter is required!" });
  }
  res.status(200).send(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

  })


module.exports = router;