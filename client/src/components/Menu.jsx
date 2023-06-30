import React from "react";
import "./Menu.css";
import { Link } from 'react-router-dom';

export default function Menu(){

  const categories = ['Bathroom', 'Kitchen', 'Home & Deco', 'Personal care', 'Reusables & Disposables'];

  return (
    <div className="menu">
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
      <ul className="menu ul">
        {categories.map((category, index) => (
          <li key={index} className="menu li">
            <Link to={`/${category.toLowerCase().replace(/\s/g, '-')}`} className="menu-link">
            {category}
            </Link>
            </li>
        ))}
      </ul>
    </div>
  );
}