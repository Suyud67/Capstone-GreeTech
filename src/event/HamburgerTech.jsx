import React from "react";

export default function HamburgerTech() {
  const hamburger = () => {
    const burger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#nav-menu");
    burger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  };
  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      className="absolute right-4 block px-5 lg:hidden"
      onClick={hamburger}
    >
      <span className="hamburger-line origin-top-left transition duration-300"></span>
      <span className="hamburger-line transition duration-300"></span>
      <span className="hamburger-line origin-bottom-left"></span>
    </button>
  );
}
