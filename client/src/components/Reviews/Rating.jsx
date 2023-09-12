import React from "react";
import StarRatings from "react-star-ratings";
import "./Rating.css"

export default function Rating({ id, rating, review, productId, userId, user, promedioRating }) {
  // Redondea promedioRating a un decimal
  const roundedRating = Math.round(promedioRating * 10) / 10;

  // Comprueba si roundedRating es un número válido
  const isRatingValid = !isNaN(roundedRating) && isFinite(roundedRating);

  return (
    <div className="rating-card">
      <h5 className="average">Average rating</h5>
      {isRatingValid ? (
        <div className="contenedor-rating">
          <p className="numero-promedio">{roundedRating}</p>
          <div className="rating">
            <StarRatings
              rating={roundedRating} // Valor decimal del rating redondeado
              starRatedColor="dodgerblue"
              starDimension="35px"
              numberOfStars={5} // Número total de estrellas
              starSpacing="1px" // Espaciado entre estrellas
              starHoverColor="green" // Color al pasar el mouse sobre las estrellas
            />
          </div>
        </div>
      ) : (
        <p>N/A</p> // Muestra "N/A" si el rating no es un número válido
      )}
      {/* Puedes mostrar más detalles de la revisión aquí */}
    </div>
  );
}
