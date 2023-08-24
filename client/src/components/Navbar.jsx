import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import "./Navbar.css";
import EcoEcho from "../Fotos/EcoEcho.png";
import CartIcon from "../Fotos/green-shopping-cart-10909.png";
import Login from "./Login/Login";
import LogoutButton from "./Login/LogoutButton";
import SignupButton from "./Login/Signup";
import { setLine, setSearch, removeFromCart } from "../Redux/Actions";
import Cart from "./ShoppingCart/Cart"

export default function Navbar() {
  
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.isSearch);
  const isLine = useSelector((state) => state.isLine);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItemCount = useSelector((state) => state.cartCount);
  console.log(cartItemCount);
  
  const cartItems = useSelector((state) => state.shoppingCart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId)); // Use your Redux action to remove from cart
  };

  

  const handleLogoClick = () => {
    if (isSearch || isLine) {
      dispatch(setSearch(false));
      dispatch(setLine(false));
    }
  };

  const handleCartClick = () => {
      setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="logo">
        <Link to="/" onClick={handleLogoClick}>
          <img
            className="logoeco"
            src={EcoEcho}
            alt="EcoEcho"
            width="90"
            height="90"
          ></img>
        </Link>
      <h1 className="text-nav">EcoEcho - ecological products </h1>
      </div>

      <div className="SearchBar">
        <SearchBar />
      </div>
      
      <div className="log-in-sign-up">
        {isAuthenticated ? (
          <>
            <Link className="profile" to="/userprofile">Profile </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Login /> 
            <SignupButton />
          </>
        )}
      </div>
      <div className="cart-icon-container">
      <img className="cart-icon" src={CartIcon} alt="ShoppingCartIcon" width="50" height="50" onClick={handleCartClick}/>
      {cartItemCount > 0 && <div className="cart-icon-number">{cartItemCount}</div>}
      </div>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
