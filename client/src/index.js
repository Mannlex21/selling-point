import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import { Routes } from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppNavbar/>
      <Routes/>
    </BrowserRouter>
  </Provider>,
  app
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

