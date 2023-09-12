const { User, Review } = require("../db");

const getReviews = async function(id) { 
  try {
    // Buscar todas las revisiones (ratings) asociadas al producto con el productId
    const reviews = await Review.findAll({
      where: {
        productId: id,
      },
      include: { model: User },
      order: [['id', 'DESC']]
    });

    if (reviews.length === 0) {
      // Si no se encontraron revisiones, devolver un objeto con un arreglo vacío de revisiones y el promedio de calificaciones
      return {
        reviews: [],
        promedioRating: 0
      };
    }

    const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    const promedioRating = totalRatings / reviews.length;

    // Devolver tanto las revisiones como el promedio de calificaciones en un objeto
    return {
      reviews,
      promedioRating
    };

  } catch (error) {
    console.error('Error al obtener las revisiones y calcular el promedio de rating:', error);
    // Maneja el error de la manera que desees, por ejemplo, lanzando una excepción
    throw error;
  }
}

module.exports = { getReviews };


