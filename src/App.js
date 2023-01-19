import React from "react";
import "./App.css";
import productData from "./components/ProductData";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

const App = () => {
  const { productItems } = productData;
  const [cartItems, setCartItems] = useState([]);
  const addProductHandler = (product) => {

  const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };



  const removeProductHandler = (product) =>{
    const productExist = cartItems.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }else{
      setCartItems(cartItems.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity - 1} : item));
    }
  }

  const removeAllProductsHandler = () =>{
    setCartItems([]);
  }

  return (
    <div className="App">
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
                  addProductHandler={addProductHandler}
                  
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  cartItems={cartItems}
                  addProductHandler={addProductHandler}
                  removeProductHandler={removeProductHandler}
                  removeAllProductsHandler={removeAllProductsHandler}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;