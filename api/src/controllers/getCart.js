const axios = require("axios");
const { Products, User, Cart } = require("../db");


const getCart = async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    try {
        if (!userId) {
            return res.status(400).json({ error: 'Invalid user ID' });
        }

        const userCart = await Cart.findAll({
            where: { userId: userId },
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
}

module.exports = { getCart };