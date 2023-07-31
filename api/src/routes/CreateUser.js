const { Router } = require('express');
const { User } = require("../db");
//const { api } = require("./infoApis")
const router = Router(); 
const { createUser } = require('../controllers/CreateUser');

router.post("/", async (req, res) => {
    try {
      const { email, fullname, profile, avatar } = req.body;
      let result = await createUser(
        email,
        fullname,
        profile,
        avatar,
      );
      // emailUser(email, fullname)
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  module.exports = router;