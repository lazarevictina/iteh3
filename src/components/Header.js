import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <ul className="nav-lista">
        <li>
          <Link to="/products" className="cart-icon links">Products <AiOutlineShop/> </Link>
        </li>
        <li>
          <Link to="/cart" className="cart-icon links">
            Cart <AiOutlineShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;