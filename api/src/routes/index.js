const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();     
const Products = require("./Products");
const users = require("./users")
const Buys = require("./Buys")
const cartController = require('../controllers/addToCart');
const getCart = require('../controllers/getCart');
const updateCart = require('../controllers/removeFromCart')
const removeAllFromCart = require('../controllers/removeAllFromCart')
//const Lines = require("./Line");
//const Brands = require("./getBrand");


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post('/api/cart/add', cartController.addToCart);
router.use("/products", Products);
router.use("/users", users);
router.use("/Buys", Buys)
router.delete("/cart/delete", updateCart.removeFromCart);
router.delete("/cart/deleteall", removeAllFromCart.removeAllFromCart);
router.get("/cart/:userId", getCart.getCart);
//router.use("/line", getLine);
//router.use("/brands", Brands);


module.exports = router;
 