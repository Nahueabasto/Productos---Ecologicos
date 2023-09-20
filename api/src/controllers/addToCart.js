const axios = require("axios");
const { Products, User, Cart } = require("../db");


const addToCart = async (req, res) => {

  try {
    const { userId, productId, quantity } = req.body;
    console.log(userId, productId, quantity)

    // Try to find an existing cart entry for the given user and product
    const existingCartEntry = await Cart.findOne({
      where: {
        userId: userId,
        productId: productId
      }
    });

    if (existingCartEntry) {
      // If entry exists, update quantity
      existingCartEntry.quantity += quantity;
      await existingCartEntry.save();
    } else {
      // If entry does not exist, create a new one
      await Cart.create({
        userId: userId,
        productId: productId,
        quantity: quantity,
      });
    }

    res.json({ message: 'Item added to cart successfully' });
      } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ error: 'Internal server error' });
      }

}

module.exports = { addToCart };