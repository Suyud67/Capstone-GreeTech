import React from "react";
import logo from "../logo/logo.png";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="" />
        <div className="text">
          <h3>GreeTech</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci,
            assumenda?
          </p>
        </div>
      </div>
      <div className="sidemap">
        <h3>Sidemap</h3>
        <div className="sidemaps">
          <h4>Home</h4>
          <h4>Product</h4>
          <h4>Contact</h4>
          <h4>About</h4>
        </div>
      </div>
      <div className="connect">
        <h3>Connect</h3>
        <div className="connects">
          <h4>Twitter</h4>
          <h4>Linked</h4>
          <h4>Facebook</h4>
          <h4>Email</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
