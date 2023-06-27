import React from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import EcoEcho from "../Fotos/EcoEcho.png"

export default function Navbar(){


    return(
        <header>  
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
                <div className="logo"></div>
                <div className="SearchBar"> <SearchBar /> </div>
                <h2 className="">EcoEcho - ecological products </h2>
                <img className="logoeco" src={EcoEcho} alt="EcoEcho" width="90" height="90"></img>
        </header>
    )
}