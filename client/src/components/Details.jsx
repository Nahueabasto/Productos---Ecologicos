import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions";

export default function ProductDetail({id}){
    const details = useSelector((state) => state.detail);
    const dispatch = useDispatch();

    useEffect( () => { 
        dispatch(getDetail(id));
    },[dispatch, id]);

    return(
        <div class="contenedor-principal">
        {details && (
          <div class="contenedor">
            <div class="card-imagen">
              <img src={details.images} alt="Not found" />
            </div>
            <div className="detalle">
              <p class="detalle-texto">Name: {details.name}</p>
              <p class="detalle-texto">Price: {details.price}</p>
              <p class="detalle-texto">Stock: {details.stock}</p>
              <p class="detalle-texto">Detail: {details.details}</p>
              <p class="detalle-texto">Line: {details.line}</p>
              
            </div>
          </div>
        )}
      </div>
      )
}