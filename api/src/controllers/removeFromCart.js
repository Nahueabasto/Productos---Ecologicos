const axios = require("axios");
const { Products, User, Cart } = require("../db");


const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

  try {
    const cartEntry = await Cart.findOne({
      where: {
        userId: userId,
        productId: productId,
      }
    });

    if (cartEntry && cartEntry.quantity > 1) {
      await cartEntry.update({ quantity: cartEntry.quantity - 1 });
      res.json({ message: 'Quantity reduced successfully' });
    } else if (cartEntry && cartEntry.quantity === 1) {
      // Delete the item if quantity is 1
      await cartEntry.destroy();
      res.json({ message: 'Item deleted from cart' });
    } else {
      // Handle scenario where entry doesn't exist
      res.status(400).json({ error: 'Invalid request' });
    }
  } catch (error) {
    console.error('Error reducing quantity:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { removeFromCart };