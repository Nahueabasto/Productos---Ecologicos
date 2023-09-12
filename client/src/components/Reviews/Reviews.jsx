import React from "react";
import StarRatings from 'react-star-ratings';
import "./Reviews.css"

export default function Review({ id, rating, review, productId, userId, user }) {
  return (
    <div className="review-card">
      <div className="review-header">
        <StarRatings
          rating={rating}
          starRatedColor="dodgerblue"
          starDimension="25px"
          starSpacing="1px"
        />
      </div>
      <p>{review}</p>
      {/* Puedes mostrar más detalles de la revisión aquí */}
    </div>
  );
}