import React from "react";
import Card from "./Card";
//import { getProducts } from "../../Redux/Actions";
import { useSelector } from "react-redux";
import "./Paginado.css";

const Paginado = ({ cards }) => {

const allProducts = useSelector((state) => state.products);

  return (
    <div className="paginado-container">
      <div className="cards-container">
   
        {allProducts.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            images={card.images}
            name={card.name}
            price={card.price}
          />
        ))}
     
      </div>
    </div>
  );
};

export default Paginado;


