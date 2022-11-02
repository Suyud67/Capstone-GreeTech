import React from "react";
import logo from "../logo/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>GreeTech</h2>
      </div>
      <div className="links">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">PRODUCT</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
      </div>
    </div>
  );
}

export default Navbar;
