import React, { useState, useEffect} from "react";
import Card from "./Card";
import "./Paginado.css";

const Paginado = ({ cards }) => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsPerPage = 4;

  const handlePrevClick = () => {
    if (!isTransitioning && visibleCardIndex > 0) {
      setIsTransitioning(true);
      setVisibleCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setVisibleCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }
  };

  const startIndex = visibleCardIndex;
  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    setIsTransitioning(false); // Reset the transitioning flag after state update
  }, [visibleCardIndex]);

  useEffect(() => {
    setVisibleCardIndex(0); // Reset the visible card index when cards change
  }, [cards]);

  return (
    <div className="paginado-container">
      <div className="cards-container">
        <button
          className="pagination-button"
          onClick={handlePrevClick}
          disabled={visibleCardIndex === 0 || isTransitioning}
        >
          &lt;
        </button>
        {visibleCards.map((card, index) => (
          <Card
            key={startIndex + index}
            id={card.id}
            images={card.images}
            name={card.name}
            price={card.price}
          />
        ))}
        <button
          className="pagination-button"
          onClick={handleNextClick}
          disabled={isTransitioning}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Paginado;


