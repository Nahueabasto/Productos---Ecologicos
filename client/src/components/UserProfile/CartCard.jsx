import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartCard.css";

export default function CartCard({ id, images, name, email, details }) {

    const imageUrls = images.split(", ");
    const firstImageUrl = imageUrls[0]; // Obtener la primera URL de imagen

    return(
        <div className="cardd">
            <img src={firstImageUrl} alt="no" className="card-img-top" style={{ height: "120px", width: "120px", objectFit: "cover", }} />
            <p className="name" style={{ fontWeight: "normal", color: "black" }}>{name}</p>
        </div>
    )
}


