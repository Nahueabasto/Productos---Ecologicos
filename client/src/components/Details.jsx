import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, addToCart, removeFromCart, updateCartCount, getReview, calculateAverageRating } from "../Redux/Actions";
import "./Details.css";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import StarRatings from 'react-star-ratings';
import Review from "./Reviews/Reviews";
import Rating from "./Reviews/Rating";

export default function ProductDetail() {
  const { id } = useParams();
  const { productId } = useParams();
  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart);
  const reviews = useSelector((state) => state.reviews);
  
 

  const [rating, setRating] = useState(0);

  const [imageUrls, setImageUrls] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);


  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getReview(id))
  }, [dispatch, id]);


  useEffect(() => {
    if (details && details.images) {
      const urls = details.images.split(",").map((img) => img.trim());
      setImageUrls(urls);
      setSelectedImage(urls[0]);
    }
  }, [details]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    console.log("Adding item to cart:", details);
    dispatch(
      addToCart({
        id: details.id,
        name: details.name,
        price: details.price,
        img: imageUrls[0]
      }),
      )
    //dispatch(updateCartCount(true))
  }

  const handleRemoveFromCart = (productId) => {
    dispatch(
      removeFromCart(productId)
      );
      //dispatch(updateCartCount(false));
  }

  const lines = details.lines?.map((li) => li.name);
  const brands = details.brands?.map((br) => br.name);

  return (
    <div className="contenedor-principal">
      
      <div>
        <Navbar />
      </div>
      <div>
        <Menu />
      </div>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      {details && (
        <div className="contenedor">
          <div className="card-imagen">
            {imageUrls.map((img) => (
              <img
                className="card-imagen"
                src={img}
                alt="Not found"
                key={img}
                width="95"
                height="95"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          {selectedImage && (
             <div
             className="enlarged-image"
             style={{ backgroundImage: `url(${selectedImage})` }}
           />
          )}
          <div className="detalle">
            <p className="detalle-name">{details.name}</p>
            <p className="detalle-price">${details.price}</p>
            <p className="detalle-texto">Size:</p> {details.size}
            <p className="detalle-texto">Brand:</p>{" "}
            <div className="detalle-brands">{brands}</div>
            <p className="detalle-texto">Detail:</p> {details.details}
            <p className="detalle-texto">Line:</p>{" "}
            <div className="detalle-lines">{lines}</div>
          <div className="buttons-container">
          <button onClick={handleAddToCart}>Add to Cart</button>
          <button onClick={() => handleRemoveFromCart(details.id)}>Remove from Cart</button>
          </div>
          </div>
        </div>
      )}


<div className="reviews-contenedor">
  
    <div className="texto"> 
    <Rating promedioRating={reviews.promedioRating} />
      </div>
      <div className="review">
    {reviews && reviews.reviews && reviews.reviews.map((review) => (
      <div key={review.id}>
        <Review
                key={review.id}
                rating={review.rating}
                review={review.review}
                userId={review.userId}
                user={review.user}
              />
      </div>
    ))}
  </div>
</div>

      <div>
        <Footer />
      </div>
    </div>
  );
}