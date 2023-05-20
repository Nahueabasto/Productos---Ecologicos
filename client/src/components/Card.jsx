import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, images, name }) {
  
  const imageUrls = images.split(", "); // Separar las URLs de imagen en un array

  return (
    <div>
      <Link to={`/products/${id}`} className="card-link">
        <h2 className="cardName">{name}</h2>
        <div>
          {/* Itera cada URL de imagen y renderizar cada una */}
          {imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt="no" />
          ))}
        </div>
      </Link>
    </div>
  );
}
