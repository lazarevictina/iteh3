import React from "react";
import "./Products.css";
import {useState} from 'react';
import Card from "./Card";
const Products = (props) => {
  const [show,setShow] = useState('All');
  const onChangeValue =(e) =>{
    setShow(e.target.value);
  }

  return (
    <div>
      <div className="filter-container">
        <div className="filter-title">Filter by Category:</div>
        <div>
          <select
            name="type-list"
            id="type-list"
            onChange={onChangeValue}
          >
            <option value="All" defaultValue>All</option>
            <option value="phone">Phone</option>
            <option value="laptop">Laptop</option>
            <option value="headphone">Headphone</option>
          </select>
        </div>
      </div>
      <div className="items">
        {props.productItems.filter(item=>{
          if(show === item.type || show === 'All'){
            return true;
          }
          return false;
        }).map((productItem) => (
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