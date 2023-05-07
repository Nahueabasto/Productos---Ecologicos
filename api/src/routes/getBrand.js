const { Router } = require('express');
const { Brand } = require("../db");
const { api } = require("./controllers/infoApis")
const router = Router();


router.get('/brand', async (req, res) => {
    try {
      await api();
      const brands = await Brand.findAll()
      res.status(200).send(brands)
    } catch (error) {
      res.status(400).send(error.message)
    }
  })