const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const Products = require("./Products");
const getLine = require("./Line");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", Products);
router.use("/", getLine);

module.exports = router;
