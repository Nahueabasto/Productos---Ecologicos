import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getLineProducts } from '../Redux/Actions';
import Paginado from "./Paginado";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import "./Home.css";
import ProductDetail from "./Details";
import { Route, Switch } from "react-router-dom";
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


export default function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.selectedCategory);


  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(getLineProducts(selectedCategory));
    }
  }, [dispatch, selectedCategory]);

  return (
    <div>
      <Navbar />
      <Menu />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
     
      <div >
          <Paginado cards={allProducts} />
        </div>
        
        <div>
      <Footer />
      </div>
    </div>
  );
}
