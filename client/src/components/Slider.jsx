import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getLineProducts } from '../Redux/Actions';
import image1 from '../Fotos/Mashstore-1.jpg';
import image2 from '../Fotos/Hilo-2.jpg';
import image3 from '../Fotos/Essabo--3.jpg';
import image4 from '../Fotos/Ruh--4.jpg';

export default function Slider() {
  const [slidePictures, setSlidePictures] = useState([
    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 }
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };

  return (
    <div className="slider-container">
      <div className="slide-pictures">
        {slidePictures.map((picture, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: index === currentIndex ? "opacity 0.5s ease" : "none"
            }}
          >
            <img src={picture.url} alt={`Slide ${index}`} />
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