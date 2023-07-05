const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const Products = require("./Products");
const getLine = require("./getLine");
const Lines = require("./Line");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", Products);
router.use("/:lineParam", getLine);
router.use("/lines", Lines);

module.exports = router;
