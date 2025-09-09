import React from 'react';
import ReactDOM from 'react-dom/client';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './contexts/products-contexts/product-context'

import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ProductProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductProvider>
);
