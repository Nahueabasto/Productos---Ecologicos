import React, { useState } from "react";
import Card from "./Card";
import "./Paginado.css";

const Paginado = ({ cards }) => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const handlePrevClick = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - cardsPerPage, 0));
  };

  const handleNextClick = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + cardsPerPage, cards.length - cardsPerPage)
    );
  };

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="paginado-container">
      <div className="cards-container">
      <button
          className="pagination-button"
          onClick={handlePrevClick}
         
        >
          &lt;
        </button>
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            id={card.id}
            images={card.images}
            name={card.name}
            price={card.price}
          />
        ))}
         <button
          className="pagination-button"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>

    </div>
  );
};

export default Paginado;




