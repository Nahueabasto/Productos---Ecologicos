import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./SearchBar/SearchBar";
import "./Navbar.css";
import EcoEcho from "../Fotos/EcoEcho.png";
import Login from "./Login/Login";
import LogoutButton from "./Login/LogoutButton";
import SignupButton from "./Login/Signup";
import { setLine, setSearch } from "../Redux/Actions";

export default function Navbar() {
  
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.isSearch);
  const isLine = useSelector((state) => state.isLine);

  const handleLogoClick = () => {
    if (isSearch || isLine) {
      dispatch(setSearch(false));
      dispatch(setLine(false));
    }
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
      </div>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <h2 className="text-nav">EcoEcho - ecological products </h2>
      <div>
        {isAuthenticated ? (
          <>
            <Link to="/userprofile">Profile, </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Login />
            <SignupButton />
          </>
        )}
      </div>
    </header>
  );
}
