// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Paginado.css";

// const Recommended = ({ cards }) => {
//   const [visibleCardIndex, setVisibleCardIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const cardsPerPage = 4;

//   const handlePrevClick = () => {
//     if (!isTransitioning && visibleCardIndex > 0) {
//       setIsTransitioning(true);
//       setVisibleCardIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setVisibleCardIndex((prevIndex) =>
//         prevIndex + 1 < cards.length ? prevIndex + 1 : prevIndex
//       );
//     }
//   };

//   useEffect(() => {
//     setIsTransitioning(false); // Reset the transitioning flag after state update
//   }, [visibleCardIndex]);

//   useEffect(() => {
//     if (visibleCardIndex + cardsPerPage > cards.length) {
//       setVisibleCardIndex(Math.max(cards.length - cardsPerPage, 0));
//     }
//   }, [cards]);

//   const startIndex = visibleCardIndex;
//   const endIndex = Math.min(visibleCardIndex + cardsPerPage, cards.length);
//   const visibleCards = cards.slice(startIndex, endIndex);

//   return (
//     <div className="paginado-container">
//          <h3 className="left-align" style={{ color: "green", fontWeight: "bold" }}>Recommended</h3>
//       <div className="cards-container">
//         <button
//           className="pagination-button"
//           onClick={handlePrevClick}
//           disabled={visibleCardIndex === 0 || isTransitioning}
//         >
//           &lt;
//         </button>
//         {visibleCards.map((card) => (
//           <Card
//             key={card.id}
//             id={card.id}
//             images={card.images}
//             name={card.name}
//             price={card.price}
//           />
//         ))}
//         <button
//           className="pagination-button"
//           onClick={handleNextClick}
//           disabled={visibleCardIndex + cardsPerPage >= cards.length || isTransitioning}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Recommended;

/////////////////////////////////////////////


//Renderiza primero las cards que tiene mayor rating
// import React, { useState, useEffect } from "react";
// import Card from "./Card";
// import "./Paginado.css";

// const Recommended = ({ cards }) => {
//   const [visibleCardIndex, setVisibleCardIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const cardsPerPage = 4;

//   const handlePrevClick = () => {
//     if (!isTransitioning && visibleCardIndex > 0) {
//       setIsTransitioning(true);
//       setVisibleCardIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   const handleNextClick = () => {
//     if (!isTransitioning) {
//       setIsTransitioning(true);
//       setVisibleCardIndex((prevIndex) =>
//         prevIndex + 1 < cards.length ? prevIndex + 1 : prevIndex
//       );
//     }
//   };

//   useEffect(() => {
//     setIsTransitioning(false); // Reset the transitioning flag after state update
//   }, [visibleCardIndex]);

//   useEffect(() => {
//     if (visibleCardIndex + cardsPerPage > cards.length) {
//       setVisibleCardIndex(Math.max(cards.length - cardsPerPage, 0));
//     }
//   }, [cards]);

//   // Ordena las tarjetas por promedioRating descendente antes de renderizar
//   const sortedCards = [...cards].sort((a, b) => b.reviews.promedioRating - a.reviews.promedioRating);

//   const startIndex = visibleCardIndex;
//   const endIndex = Math.min(visibleCardIndex + cardsPerPage, sortedCards.length);
//   const visibleCards = sortedCards.slice(startIndex, endIndex);

//   return (
//     <div className="paginado-container">
//       <h3 className="left-align" style={{ color: "green", fontWeight: "bold" }}>Recommended</h3>
//       <div className="cards-container">
//         <button
//           className="pagination-button"
//           onClick={handlePrevClick}
//           disabled={visibleCardIndex === 0 || isTransitioning}
//         >
//           &lt;
//         </button>
//         {visibleCards.map((card) => (
//           <Card
//             key={card.id}
//             id={card.id}
//             images={card.images}
//             name={card.name}
//             price={card.price}
//           />
//         ))}
//         <button
//           className="pagination-button"
//           onClick={handleNextClick}
//           disabled={visibleCardIndex + cardsPerPage >= sortedCards.length || isTransitioning}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Recommended;


////renderiza las de promedio de 5 y 4
import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Paginado.css";

const Recommended = ({ cards }) => {
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardsPerPage = 4;

  // Filtra las tarjetas con promedioRating entre 4 y 5 (incluyendo números decimales)
const filteredCards = cards.filter((card) => card.reviews.promedioRating >= 4 && card.reviews.promedioRating <= 5);


  // Ordena las tarjetas filtradas por promedioRating descendente
  const sortedCards = [...filteredCards].sort((a, b) => b.reviews.promedioRating - a.reviews.promedioRating);

  const handlePrevClick = () => {
    if (!isTransitioning && visibleCardIndex > 0) {
      setIsTransitioning(true);
      setVisibleCardIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setVisibleCardIndex((prevIndex) =>
        prevIndex + 1 < sortedCards.length ? prevIndex + 1 : prevIndex
      );
    }
  };

  useEffect(() => {
    setIsTransitioning(false); // Reset the transitioning flag after state update
  }, [visibleCardIndex]);

  useEffect(() => {
    if (visibleCardIndex + cardsPerPage > sortedCards.length) {
      setVisibleCardIndex(Math.max(sortedCards.length - cardsPerPage, 0));
    }
  }, [sortedCards]);

  const startIndex = visibleCardIndex;
  const endIndex = Math.min(visibleCardIndex + cardsPerPage, sortedCards.length);
  const visibleCards = sortedCards.slice(startIndex, endIndex);

  return (
    <div className="paginado-container">
      <h3 className="left-align" style={{ color: "green", fontWeight: "bold" }}>Recommended</h3>
      <div className="cards-container">
        <button
          className="pagination-button"
          onClick={handlePrevClick}
          disabled={visibleCardIndex === 0 || isTransitioning}
        >
          &lt;
        </button>
        {visibleCards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            images={card.images}
            name={card.name}
            price={card.price}
          />
        ))}
        <button
          className="pagination-button"
          onClick={handleNextClick}
          disabled={visibleCardIndex + cardsPerPage >= sortedCards.length || isTransitioning}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Recommended;
