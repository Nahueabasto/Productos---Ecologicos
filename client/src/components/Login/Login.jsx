import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Login.css'; // Importa el archivo CSS para los estilos personalizados

export default function Login() {
  return (
    <div className="user-icon-wrapper">
      <FontAwesomeIcon icon={faUser} className="user-icon" />
    </div>
  );
}


