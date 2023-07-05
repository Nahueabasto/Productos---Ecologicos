const { Router } = require('express');
const { Line, Products } = require("../db");
//const { api } = require("./infoApis")
const router = Router();  


router.get('/lines', async (req, res) => {
  try {
      const lines = await Line.findAll();
      res.json(lines);
    } catch (error) {
      next(error);
    }
  });
  
module.exports = router;