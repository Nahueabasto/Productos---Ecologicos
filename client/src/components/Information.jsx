import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer from "./Footer";
import "./Information.css"

export default function Information(){

return(
    <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Menu />
            </div>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
        <div>
            <div> 
                <h1 style={{ color: "green" }}> QUIENES SOMOS </h1>
            "En EcoEcho, creemos en el poder del cambio para un futuro más sostenible. Nuestra historia comenzó con una simple idea: ofrecer productos que cuiden nuestro planeta y a las personas que lo habitan. Somos apasionados por el medio ambiente y creamos una tienda que ofrece una alternativa ecológica a los productos cotidianos. </div>
                
        
        </div>
        <div>
            <Footer />
        </div>
        </div>
)
}