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

    useEffect( () => { 
        dispatch(getDetail(id));
    },[dispatch, id]);

    console.log(details); 

    return(
        <div className="contenedor-principal">
        {details && (
          <div className="contenedor">
            <div className="card-imagen">
              <img src={details.images} alt="Not found" />
            </div>
            <div className="detalle">
              <p className="detalle-texto">Name: {details.name}</p>
              <p className="detalle-texto">Price: {details.price}</p>
              <p className="detalle-texto">Stock: {details.stock}</p>
              <p className="detalle-texto">Detail: {details.details}</p>
              <p className="detalle-texto">Line: {details.line}</p>
              
            </div>
          </div>
        )}
      </div>
      )
}