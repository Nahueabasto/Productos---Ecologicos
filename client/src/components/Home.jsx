import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts, getLineProducts } from '../Redux/Actions';
import Card from './Card';
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Slider from "./Slider";
import "./Slider.css";
import "./Home.css";



export default function Home() {
    const dispatch = useDispatch()
    const allProducts = useSelector((state) => state.products)
    const selectedCategory = useSelector((state) => state.selectedCategory);


    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch])

    useEffect(() => {
        if (selectedCategory) {
          dispatch(getLineProducts(selectedCategory));
        }
      }, [dispatch, selectedCategory]);
    

    return (
        <div >
            <div>
                <Navbar />
            </div>
            <div>
                <Menu />
            </div>
            <div>
                <Slider />
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
           
        <div>

            <div className="cards-container">
                {allProducts?.map((el) => {
                    return (
                        <div key={el.id}>
                            <Card
                                images={el.images}
                                name={el.name}
                                id={el.id}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
        <div>
            < Footer />
        </div>
        </div>
    )
}
