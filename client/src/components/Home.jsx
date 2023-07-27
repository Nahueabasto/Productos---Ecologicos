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
import { useParams } from "react-router-dom";
import Recommended from "./Cards/Recommended";
import Offer from "./Cards/Offer";

export default function Home() {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const allProducts = useSelector((state) => state.products);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const isSearch = useSelector((state) => state.isSearch);
  const isLine = useSelector((state) => state.isLine);

  const filteredProducts = allProducts.filter(
    (product) => product.category === categoryName
  );

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
      <div>
        <Navbar />
      </div>
      <div>
        <Menu />
      </div>
      <div>
        {/* Show the Slider component only if isSearch and isLine are false */}
        {!isSearch && !isLine && <Slider />}
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet" />

      <div>
        <div>
          {/* Show the Paginado component only if isSearch is true */}
          {isSearch && <Paginado cards={filteredProducts} />}
        </div>
        <div>
          {/* Show the Recommended component only if isSearch is false */}
          {!isSearch && <Recommended cards={filteredProducts} showAll={true} />}
        </div>
        <div>
          {/* Show the Offer component only if isSearch is false */}
          {!isSearch && <Offer cards={filteredProducts} showAll={true} />}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
