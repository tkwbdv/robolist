import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./containers/App.js";
import * as serviceWorker from './serviceWorker';
import "tachyons";  //predefined classes so we dont have to write a css file for every component


ReactDOM.render(<App />, document.getElementById('root')); // Mounting: we are replacing "root" with our App

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();