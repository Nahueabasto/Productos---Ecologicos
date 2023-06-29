import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../Redux/Actions";
import "./Details.css";

export default function ProductDetail(){
    const { id } = useParams()
    const details = useSelector((state) => state.detail);
    const dispatch = useDispatch();
    let imageUrls = [];

    useEffect( () => { 
        dispatch(getDetail(id));
    },[dispatch, id]);

    if (details && details.images) {
      imageUrls = details.images.split(",");
      imageUrls = imageUrls.map((img) => img.trim());
    }

    console.log(imageUrls); 

    return(
      <div className="contenedor-principal">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      {details && (
        <div className="contenedor">
          <div className="card-imagen">
          {imageUrls.map( img => (
            <img src={img.trim()} alt="Not found" key={img} width="250" height="250"/>
            ))}
          </div>
          <div className="detalle">
            <p className="detalle-texto">Name: {details.name}</p>
            <p className="detalle-texto">Price: {details.price}</p>
            <p className="detalle-texto">Stock: {details.stock}</p>
            <p className="detalle-texto">Details: {details.details}</p>
            <p className="detalle-texto">Line: {details.line}</p>
            
          </div>
        </div>
      )}
    </div>
      )
}