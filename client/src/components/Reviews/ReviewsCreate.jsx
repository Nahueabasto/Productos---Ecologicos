import React, { useEffect, useState } from "react";
import { postReview } from "../../Redux/Actions";
//import Rating from '@mui/material/Rating'
import { useDispatch, useSelector } from "react-redux";
import StarRatings from 'react-star-ratings';
import "./ReviewsCreate.css"

export default function ReviewsCreate({idProduct, userEmail}){

    const dispatch = useDispatch();
    
    const [rating, setRating] = useState(0);
    const [content, setContent] = useState('');

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        email: "",
    })

    const changeRating = (newRating) => {
      setRating(newRating);
      // Aquí puedes agregar lógica adicional, como enviar la calificación al servidor.
    };

    function handleSubmit(e) {
        e.preventDefault()
        if (review.rating > 0 && review.review) {
            dispatch(postReview(idProduct, review))
        }
    }

    return(
        <div>
          <div>
      <h2>Calificación con estrellas</h2>
      <StarRatings
        rating={rating}
        starRatedColor="dodgerblue" // Cambia el color de las estrellas seleccionadas
        changeRating={changeRating}
        numberOfStars={5} // Número de estrellas en total
        name='rating' // Nombre para el grupo de calificación (importante si tienes varios en la misma página)
        style={{ color: 'dodgerblue' }}
      />
      <p>Calificación: {rating}</p>
    </div>
       <div className="review">
            <h1 className="reviews">Reviews</h1>
            <form onSubmit={handleSubmit}>

    <div className="form-group">
      
      <textarea
        className="form-control"
        id="content"
        value={content}
        placeholder="comment about the product"
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
    <button
      type="submit"
      className="primary"
      style={{ marginRight: '1050px' }} // Agrega el margen derecho de 5px
    >
      Comment
    </button>
    {/* <button 
      type="button"
      className="btn btn-danger"
      style={{ marginRight: '5px' }} // Agrega el margen derecho de 5px
    >
      Delete
    </button> */}
  </form>
  </div> 
    </div>
    )

}