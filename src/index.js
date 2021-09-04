import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery';
import 'popper.js/dist/umd/popper'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/js/bootstrap'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
