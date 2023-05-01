const { Router } = require("express");
const router = Router();
const { getApi } = require("./controllers/info.js");


router.get('/', async (req, res) => {
    try {
        let { name } = req.query;
        const result = await getApi(name);
        res.status(200).send(result);

        // Agregar console.log aquí
        console.log(result);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
});


module.exports = router;


