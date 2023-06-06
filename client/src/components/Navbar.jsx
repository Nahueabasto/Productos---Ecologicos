import React from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css"

export default function Navbar(){


    return(
        <header>  
                <div className="logo"></div>
                <div className="SearchBar"> <SearchBar /> </div>
                <h2 className="">"tenemos que buscarle otro nombre "obviamente despues acomodaremos todo mejor de acuerdo a como hacemos el diseño" </h2>
        </header>
    )
}