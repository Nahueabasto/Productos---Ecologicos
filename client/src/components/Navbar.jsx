import React, { useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import EcoEcho from "../Fotos/EcoEcho.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login/Login";
import Profile from "./Login/Profile";

export default function Navbar() {
 
  const { loginWithRedirect } = useAuth0();

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

     <Login/>
   <Profile />
</div>
    </header>
  );
}

