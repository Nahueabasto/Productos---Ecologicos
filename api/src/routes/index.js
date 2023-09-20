const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const Products = require("./Products");
const users = require("./users")
const Buys = require("./Buys")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/products", Products);
router.use("/users", users);
router.use("/Buys", Buys)


module.exports = router;
