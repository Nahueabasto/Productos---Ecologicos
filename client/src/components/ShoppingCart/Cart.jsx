import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, addToCart, removeFromCart, updateCartCount, removeAll, updateQuantity, totalCart } from "../../Redux/Actions";
import "./Cart.css"
import trashIcon from "../../Fotos/trash.png";


export default function Cart({isOpen, onClose}){
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const totalCartValue = useSelector((state) => state.totalCart);

  //se actualiza cuando hay modificaciones al shopping cart.
  useEffect(() => {
    dispatch(totalCart());
  }, [dispatch, shoppingCart]);
  

  useEffect(() => {
    setCartItems(shoppingCart);
  }, [shoppingCart]);

  const handleUpdateQuantity = (itemId) => {
    console.log("Updating quantity:", itemId);
    dispatch(
      updateQuantity((itemId
     )),
      )
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(
      removeFromCart(productId)
      );
  };


  const handleRemoveAll = (productId) => {
    dispatch(
      removeAll(productId)
      );
  };

  return (
    <>
      {isOpen && (
        <div className="cart-modal-overlay">
          <div className="cart-modal cart-modal-container">
            <button className="close-button" onClick={onClose}>
              X
            </button>

            <div className="cart-title">
            <h2 className="title-bold">Your Shopping Cart</h2>
            </div>
            
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}> 
                <div className="product-item-container">
                <img className="img-cart-detail" src={item.img} height="55px" width="55px"/>
                  {item.name} 
                <img src={trashIcon} className="trash-button" onClick={() => handleRemoveAll(item.id)}/> 
                </div>
                <div>
                  <div className="lastline">
                    <div className="productQuantity">
                    <button className="plus-minus" onClick={() => handleRemoveFromCart(item.id)}>-</button>
                      <div className="numbers">{item.quantity}</div>
                    <button className="plus-minus" onClick={() => handleUpdateQuantity(item.id)}>+</button>
                    </div>
                    </div>
                    {item.quantity === 1 ? (<div className="pricing">${item.price} {" "}</div>) : (<div className="pricing">${item.price * item.quantity}</div>)
                    }
                    <div className="separator"> ━━━━━━━━━━━━━━━━━━━━━━</div>
                    </div>
                </li>
              ))}
            </ul>
            <div className="total-amount"> Total: ${totalCartValue}</div>
          </div>
        </div>
      )}
    </>
  );

}

