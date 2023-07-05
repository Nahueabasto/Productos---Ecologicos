import React from "react";
import "./Menu.css";
import { useDispatch, useSelector, useState } from "react-redux"
import { Link } from 'react-router-dom';
import { getLineProducts } from '../Redux/Actions';

export default function Menu(){
  const dispatch = useDispatch()
  const categories = ['Bathroom', 'Kitchen', 'Home & Deco', 'Personal care', 'Reusables & Disposables'];

  const selectedCategory = useSelector((state) => state.selectedCategory);


  function handleClick(category){
    dispatch(getLineProducts(category));
  }

  return (
    <div className="menu">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      <ul className="menu ul">
        {categories.map((category, index) => (
          <li key={index} className="menu li">
            <Link to={`/${category.toLowerCase().replace(/\s/g, '-')}`} className={`menu-link ${selectedCategory === category ? 'active' : ''}`} onClick={() => handleClick(category)}>
            {category}
            </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}