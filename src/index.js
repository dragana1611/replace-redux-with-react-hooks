import React from "react";
import { createRoot } from "react-dom/client";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import configureProductStore from "./hooks-store/products-store";
// import productReducer from "./store/reducers/products";
import ProductsProvider from "./context/products-context";

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);
configureProductStore();
const root = createRoot(document.getElementById("root"));

root.render(
  // <Provider store={store}>
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
  // </Provider>
);
