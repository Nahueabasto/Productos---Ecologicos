
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card({ id, images, name, price }) {
  const imageUrls = images.split(", ");
  const firstImageUrl = imageUrls[0]; // Obtener la primera URL de imagen

  return (
    <div className="card" style={{ width: "250px", height: "400px", margin: "5px", boxShadow: "0 0 2px 0px rgba(0, 0, 0, 0.5)", borderRadius: "20px" }}>
      <Link to={`/${id}`} className="card-link" style={{ textDecoration: "none" }}>
        <img src={firstImageUrl} alt="no" className="card-img-top" style={{ height: "250px", objectFit: "cover", borderTopRightRadius: "20px", borderTopLeftRadius: "20px" }} />
        <div className="card-body" style={{ borderTop: "2px solid black" }}>
          <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "normal", color: "black" }}>{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: "25px", fontWeight: "bolder", color: "black"  }}>${price}</h6>
        </div>
      </Link>
    </div>
  );
}


