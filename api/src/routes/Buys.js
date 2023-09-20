const { Router } = require("express");
const router = Router();
const { User, Products, Buys } = require("../db");
const { createBuys } = require('../controllers/createBuys');


// Ruta para crear una entrada en la tabla Buys
router.post('/', async (req, res) => {
  const { productId, userId } = req.body;

  try {
    const newBuys = await createBuys(productId, userId);

    // Utiliza Sequelize para realizar un JOIN con las tablas Product y User
    const BuysWithDetails = await Buys.findOne({
      where: { id: newBuys.id },
      include: [
        {
          model: Products,
          attributes: ['name', 'images', 'details'],
        },
        {
          model: User,
          attributes: ['name', 'email', 'avatar'],
        },
      ],
    });

    if (!BuysWithDetails) {
      return res.status(404).json({ error: 'La compra no se encontró.' });
    }

    // Devuelve la información completa de la compra
    return res.json(BuysWithDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Hubo un error al procesar la compra.' });
  }
});


router.get('/', async (req, res) => {
  try {
    const allBuysWithDetails = await Buys.findAll({
      include: [
        {
          model: Products,
          attributes: ['name', 'images', 'details'],
        },
        {
          model: User,
          attributes: ['name', 'email', 'avatar'],
        },
      ],
    });

    if (!allBuysWithDetails || allBuysWithDetails.length === 0) {
      return res.status(404).json({ error: 'No se encontraron compras.' });
    }

    // Devuelve la información completa de todas las compras
    return res.json(allBuysWithDetails);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Hubo un error al obtener las compras.' });
  }
});


module.exports = router;
