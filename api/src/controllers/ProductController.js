// const { Review } = require("../db"); // Ajusta la ruta según sea necesario
// //const { sequelize } = require("../db");


// async function ProductController(id) {
//   try {
//     // Buscar todas las revisiones (ratings) asociadas al producto con el productId
//     const reviews = await Review.findAll({
//       attributes: ['rating'],
//       where: {
//         productId: id,
//       },
//     });

//     if (reviews.length === 0) {
//       // Si no se encontraron registros de revisiones, devolver 0 o manejar de otra manera
//       return 0;
//     }

//     // Calcular el promedio de las calificaciones
//     const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
//     const promedioRating = totalRatings / reviews.length;

//     // Registro del promedio en la consola para depuración
//     console.log(promedioRating);

//     return promedioRating;

//   } catch (error) {
//     console.error('Error al calcular el promedio de rating:', error);
//     return 0; // O maneja el error de la manera que desees
//   }
// }


// module.exports = {
//   ProductController,
// };







