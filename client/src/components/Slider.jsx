import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getLineProducts } from '../Redux/Actions';
import image1 from '../Fotos/Mashstore-1.jpg';
import image2 from '../Fotos/Hilo-2.jpg';
import image3 from '../Fotos/Essabo--3.jpg';
import image4 from '../Fotos/Ruh--4.jpg';

export default function Slider() {
  const [slidePictures, setSlidePictures] = useState([
    { image: image1, url: '/40' },
    { image: image2, url: '/32' },
    { image: image3, url: '/21' },
    { image: image4, url: '/10' }
  ]); //estado local con las imágenes
  const [currentIndex, setCurrentIndex] = useState(0); //estado local para manejar la imagen que se está mostrando

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); //hook para timeoutear y pasar a la próxima slide

    return () => { //el return se usa cuando el componente cambie o se desmonte
      clearInterval(interval); //limpiar el intervalo cuando no se use el componente
    };
  }, []); //se renderiza sólo al montar el componente (no hace falta más)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  }; // Para calcular el index resta 1 del current index, le suma el largo total del array y calcula el resto dividiendo el index por la longitud de todo el array - de modo que si el index es cero y vas para atrás, vuelvas al 3. Es una "wrap-around logic".

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };  //lo mismo pero sumando.

  return (
    <div className="slider-container">
      <div className="slide-pictures">
        {slidePictures.map((picture, index) => ( //se itera sobre cada imagen llevando la cuenta también del index.
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`} //si el index coincide con la current slide se aplica el css para active.
            style={{ //esto es un inline style css que le saca la opacidad a la slide activa transicionalmente para pasar a la siguiente
              transform: `translateX(-${currentIndex * 100}%)`, //esto las deja horizontales, pero no sé bien cómo funciona
              transition: index === currentIndex ? "opacity 0.5s ease" : "none" //saca la opacidad a la slide activa y se la pone a las demás.
            }}
          >
           <Link to={picture.url}> <img src={picture.image} alt={`Slide ${index}`} /></Link>
          </div>
        ))}
      </div>
      <div className="slide-controls">
      <button className="slide-control prev" onClick={handlePrev}>
          &lt;
        </button>
        <button className="slide-control next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
}