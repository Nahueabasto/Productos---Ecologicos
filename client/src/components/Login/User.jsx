import React from "react";
import Navbar from "../Navbar";
import Menu from "../Menu";
import Footer from "../Footer";

export default function User(){
    return(
        <div>
            <div> <Navbar/>
             </div>
            <div> Mi cuenta </div>

            <div>
            <div>ACCEDER</div>
            <div> Nombre de usuario o correo electronico</div>
            <input type="text" />
            <div>Contraseña</div>
            <input type="text" />
            <button>Ingresar</button>
            <div> Recordarme </div>

            <div>
                <div>Registrarme</div>
                <button>Registrarme</button>
            </div>
            </div>

        </div>
    )
}