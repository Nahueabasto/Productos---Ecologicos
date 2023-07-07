import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import './Login.css';

export default function Login({ onLogin }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    onLogin(); // Llama a la función onLogin proporcionada por el componente padre
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-wrapper">
      {isLoggedIn ? (
        <div className="user-icon-wrapper" onClick={handleLogout}>
          <FaUser className="user-icon" />
        </div>
      ) : (
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  );
}
