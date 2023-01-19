import React from "react";
import "./Products.css";
import {useState} from 'react';
import Card from "./Card";
const Products = (props) => {

  return (
    <div>
      
      <div className="items">
        {props.productItems.map((productItem) => (
          <Card key={productItem.id}>
            <div>
              <img
                className="item-img"
                src={productItem.image}
                alt={productItem.name}
              />
            </div>
            <div>
              <h3 className="item-name">{productItem.name}</h3>
            </div>
            <div className="item-price">{productItem.price}e</div>
            <div>
              <button
                className="item-add-button"
                onClick={() => props.addProductHandler(productItem)}
              >
                Add to Cart
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;