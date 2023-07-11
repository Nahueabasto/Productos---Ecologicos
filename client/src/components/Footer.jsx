import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBoxOpen, faBox, faTruckRampBox, faBagShopping, faListCheck, faPhoneVolume, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import EcoEcho from "../Fotos/EcoEcho.png"
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer(){

    return(
      <footer>
  <div className="container">
    <div>
      <img className="logoeco" src={EcoEcho} alt="EcoEcho" width="200" height="150" />
    </div>

    <div className="Informacion">
      <h3>INFORMACION</h3>
      <Link to="/information" className="links">
        <p>Quienes somos</p>
      </Link>
      <Link to="/" className="links">
        <p>Preguntas frecuentes</p>
      </Link>
    </div>

    <div className="Contacto">
      <h3>CONTACTO</h3>
      <p>
        <FontAwesomeIcon icon={faPhoneVolume} /> +54 998 844 022
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> contacto@ecoecho.com
      </p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} /> Argentina
      </p>
    </div>

    <div>
  <h3>SEGUINOS</h3>
  <div className="social-links">
    <Link to="/" className="links">
      <FontAwesomeIcon icon={faFacebook} size="3x" />
    </Link>
    <Link to="/" className="links">
      <FontAwesomeIcon icon={faInstagram} size="3x" />
    </Link>
    <Link to="/" className="links">
      <FontAwesomeIcon icon={faTwitter} size="3x" />
    </Link>
  </div>
</div>


    <hr /> {/* Línea separadora */}
  </div>
  <p className="rights">
      &copy; 2023 EcoEcho | All Rights Reserved
    </p>
</footer>


    )
}