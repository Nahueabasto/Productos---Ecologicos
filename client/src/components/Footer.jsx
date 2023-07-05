import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBoxOpen, faBox, faTruckRampBox, faBagShopping, faListCheck, faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import EcoEcho from "../Fotos/EcoEcho.png"
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
        <footer>
        <div class="container">
            <div>
            <Link to='/'>
                <img className="logoeco" src={EcoEcho} alt="EcoEcho" width="150" height="150"></img>
            </Link>
            </div>
        <div className="Contacto">
          <h3>CONTACTO</h3>
          <p><FontAwesomeIcon icon={faPhoneVolume} />  +54 998 844 022</p>
          <p><FontAwesomeIcon icon={faEnvelope} />  contacto@ecoecho.com</p>
          <p><FontAwesomeIcon icon={faLocationDot} />  Argentina </p>
        </div>
        <div>
        <h3>SEGUINOS</h3>
        <Link to='/'> <FontAwesomeIcon icon={faFacebook} size="3x" />  </Link>
         <p>  <FontAwesomeIcon icon={faInstagram} size="3x" />  </p>
        </div>

        <p>
        Copyright © 2023 EcoEcho | All Rights Reserved
        </p>

        </div>
      </footer>
    )
}