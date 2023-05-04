const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const getProducts = require("./getProducts");
const getLine = require("./getLine");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getProducts);
router.use("/", getLine);

module.exports = router;
