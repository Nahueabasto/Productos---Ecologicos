import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

export default function Login() {
  
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-wrapper">
       
        <button className="login-button" onClick={()=> loginWithRedirect()}>
          Login
        </button>
    
    </div>
  );
}
