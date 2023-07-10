import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Auth0Provider } from '@auth0/auth0-react'


const domain = "dev-kfynii0opohfkfjk.us.auth0.com";
const clientId = "5aYZdWgABDmYkBSjHTUPrhw9CuZ1RKcQ";

console.log(domain, clientId);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Auth0Provider
    domain="dev-kfynii0opohfkfjk.us.auth0.com"
    clientId="5aYZdWgABDmYkBSjHTUPrhw9CuZ1RKcQ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>,
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
