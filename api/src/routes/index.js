const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const Products = require("./Products");
const getLine = require("./Line");
const productsId = require("./productsId");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", Products);
router.use("/", getLine);
router.use("/", productsId);

module.exports = router;
