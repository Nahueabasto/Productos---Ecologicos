const { Router } = require('express');
const { Line } = require("../db");


const router = Router();

router.get('/line', async (req, res) => {
    try {
        const line = await Line.findAll()
        res.status(200).send(line)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = router;