const axios = require("axios");
const { Router } = require('express');
const { Products, User, Cart } = require("../db");
const router = Router();


router.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params;
    console.log(userId);

    try {
        if (!userId) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const userCart = await Cart.findAll({
            where: { userId: userId },
            include: [{ 
                model: Products, 
                attributes: ["productId"],
                through: { attributes: [] }
            }]
        });

        if (userCart.length > 0) {
            return res.json(userCart);
        } else {
            return res.status(404).json({ error: `Cart for user with ID ${userId} is empty` });
        }
    } catch (error) {
        console.error('Error fetching user cart:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;