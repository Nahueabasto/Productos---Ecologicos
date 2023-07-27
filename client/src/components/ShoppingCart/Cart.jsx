import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, addToCart, removeFromCart } from "../../Redux/Actions";
import "./Cart.css"


export default function Cart({isOpen, onClose}){
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.shoppingCart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <>
      {isOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            <h2 className="title-bold">Your Shopping Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - Quantity: {item.quantity}{" "}
                  <button className="add-button" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );

}
