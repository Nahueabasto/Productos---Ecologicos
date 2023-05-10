const { Router } = require('express');
const { Line } = require("../db");
//const { api } = require("./infoApis")
const router = Router();


router.get('/line', async (req, res) => {
    try {
      await api();
      const lines = await Line.findAll()
      res.status(200).send(lines)
    } catch (error) {
      res.status(400).send(error.message)
    }
  })


module.exports = router;