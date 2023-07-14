import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getLineProducts } from '../Redux/Actions';
import Paginado from "./Cards/Paginado";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import Slider from "./Slider";
import "./Slider.css";
import "./Home.css";

import ProductDetail from "./Details";
import { Route, Switch } from "react-router-dom";



export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const isSearch = useSelector((state) => state.isSearch); ////


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

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
    {!isSearch && <Slider />}
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
   
       <div>
      <div >
          <Paginado cards={allProducts} />
        </div>
        </div>
        <div>
      <Footer />
      </div>
    </div>
  );
}