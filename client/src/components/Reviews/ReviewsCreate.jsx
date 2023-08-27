import React, { useEffect, useState } from "react";
import { postReview } from "../../Redux/Actions";
//import Rating from '@mui/material/Rating'
import { useDispatch, useSelector } from "react-redux";


export default function ReviewsCreate({idProduct, userEmail}){

    const dispatch = useDispatch()

    const [review, setReview] = useState({
        review: "",
        rating: 0,
        email: "",
    })


    function handleSubmit(e) {
        e.preventDefault()
        if (review.rating > 0 && review.review) {
            dispatch(postReview(idProduct, review))
        }
    }

    return(
        <div>
            <h1>1</h1>
        </div>
    )

}