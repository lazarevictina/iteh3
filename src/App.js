import React from 'react';
import productData from "./components/ProductData";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
  const { productItems } = productData;
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
          <Route index element={<Navigate to="/products" replace />} />
            <Route
              path="/products"
              element={
                <Products
                productItems={productItems}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App