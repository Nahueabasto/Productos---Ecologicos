import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { Auth0Provider } from '@auth0/auth0-react'


const domain = "nahue7474.us.auth0.com";
const clientId = "hLxxzUsHpN5ZPM49ZrScaQ4Xsm0mGefN";

console.log(domain, clientId);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Auth0Provider
    domain="nahue7474.us.auth0.com"
    clientId="hLxxzUsHpN5ZPM49ZrScaQ4Xsm0mGefN"
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
