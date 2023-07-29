import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, addToCart, removeFromCart, updateCartCount, removeAll } from "../../Redux/Actions";
import "./Cart.css"


export default function Cart({isOpen, onClose}){
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const shoppingCart = useSelector((state) => state.shoppingCart);


  useEffect(() => {
    setCartItems(shoppingCart);
  }, [shoppingCart]);

  const handleRemoveFromCart = (productId) => {
    dispatch(
      removeFromCart(productId)
      );
      //dispatch(updateCartCount(false));
  };

  const handleRemoveAll = (productId) => {
    dispatch(
      removeAll(productId)
      );
      //dispatch(updateCartCount(false));
  };

  return (
    <>
      {isOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal cart-modal-container">
            <button className="close-button" onClick={onClose}>
              X
            </button>
            <h2 className="title-bold">Your Shopping Cart</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}> <img className="img-cart-detail" src={item.img} height="55px" width="55px"/>
                  {item.name} - <div>{item.quantity} x ${item.price} {" "}
                  <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>
                    Remove one
                  </button> <button className="remove-button" onClick={() => handleRemoveAll(item.id)}>
                    Remove all
                  </button></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );

}
