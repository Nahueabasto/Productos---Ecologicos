import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import EcoEcho from "../Fotos/EcoEcho.png";
import { Link, useHistory } from "react-router-dom";
import User from "./Login/User";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const handleLogin = () => {
    setIsLoggedIn(true);
    history.push("/user"); // Redirige a la página del componente User
  };
  

  return (
    <header>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="logo"></div>
      <Link to="/">
        <img
          className="logoeco"
          src={EcoEcho}
          alt="EcoEcho"
          width="90"
          height="90"
        ></img>
      </Link>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <h2 className="text-nav">EcoEcho - ecological products </h2>
      <div>
  {isLoggedIn ? (
    <Link to="/User"></Link>
  ) : (
    <button onClick={handleLogin}>Login</button>
  )}
</div>
    </header>
  );
}

