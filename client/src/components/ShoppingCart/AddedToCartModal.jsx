import React, { useState, useEffect } from "react";
import "./AddedToCartModal.css";

export default function AddedToCartModal({ isOpen, onClose, addedProduct }) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen && addedProduct) {
      setShowModal(true);
      setTimeout(() => {
        setShowModal(false);
        onClose(); // Después de mostrar el mensaje, cerrarlo
      }, 3000); // Esperar 3 segundos para cerrarlo
    }
  }, [isOpen]);


  return (
    <div className={`added-to-cart-modal ${isOpen ? "show" : ""}`}>
      {addedProduct && (
        <div className="product-details">
        <img src={addedProduct.img} width="100" height="100" />
        <div className="product-info">
          <p><b>Product:</b> {addedProduct.name}</p>
          <p><b>Price:</b> ${addedProduct.price}</p>
        </div>
      </div>
      )}
      <div className="message">
        <p><b>Your item was added to the cart!</b></p>
      </div>
    </div>
  );
}