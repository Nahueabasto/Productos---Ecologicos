const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const getProducts = require("./getProducts");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/", getProducts);

module.exports = router;
