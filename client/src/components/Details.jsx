import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../Redux/Actions";
import "./Details.css";
import Navbar from "./Navbar";
import Menu from "./Menu";

export default function ProductDetail(){
    const { id } = useParams()
    const details = useSelector((state) => state.detail);
    const dispatch = useDispatch();
    
  const [imageUrls, setImageUrls] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect( () => { 
        dispatch(getDetail(id));
    },[dispatch, id]);

   
    useEffect(() => {
      if (details && details.images) {
        const urls = details.images.split(",").map((img) => img.trim());
        setImageUrls(urls);
        setSelectedImage(urls[0]);
      }
    }, [details]);
  
    return (

      <div className="contenedor-principal">
              <div>
      <Navbar />
  </div>
  <div>
      <Menu />
  </div>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        {details && (
          <div className="contenedor">
            <div className="card-imagen">
              {imageUrls.map((img) => (
                <img
                className="card-imagen"
                  src={img}
                  alt="Not found"
                  key={img}
                  width="95"
                  height="95"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Not found"
                className="enlarged-image"
              />
            )}
            <div className="detalle">
              <p className="detalle-name">{details.name}</p>
              <p className="detalle-price">${details.price}</p>
              <p className="detalle-texto">Stock:</p> {details.stock}
              <p className="detalle-texto">Detail:</p> {details.details}
              <p className="detalle-texto">Line:</p> {details.line}
            </div>
          </div>
        )}
      </div>
    );
}