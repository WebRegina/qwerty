import React, { useContext, useState } from "react";
import logo from "../../imgs/logo.svg";
import cart from "../../imgs/cart.svg";
import about from "../../imgs/about.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header>
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <ul>
            <li>Shop</li>
            <li>On Sale</li>
            <li>Brands</li>
            <Link to={"/Add"}>
              <li>AddElement</li>
            </Link>
          </ul>
        </nav>

        <div className="input-box">
          <i class="bx bx-search"></i>
          {props.input}
        </div>
        <div className="header-right">
          <img src={cart} alt="" />
          <img src={about} alt="" />
        </div>
      </header>
    </>
  );
}

export default Header;
