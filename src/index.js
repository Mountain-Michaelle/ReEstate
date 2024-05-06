import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Assets/CSS/index.scss';
import DeBees from './Assets/Images/DeBees.png'
import Helmet from 'react-helmet'

axios.defaults.xsrfCookiesName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Helmet>
    <title>DeBees</title>
    <meta name="ABC" content="" />
    <link rel="icon" type="image/png" href={DeBees} sizes="100x100" />
  </Helmet>
      <App />
    {/* </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
