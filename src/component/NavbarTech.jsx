import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerTech from '../event/HamburgerTech';
import logo from '../img/logo.png';

export default function Navbar() {
  window.onscroll = () => {
    const navbar = document.getElementById('navbar');
    const fixedNav = navbar.offsetTop;

    if (window.pageYOffset > fixedNav) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  };

  return (
    <header className="absolute top-0 left-0 z-10 flex w-full items-center bg-transparent text-black" id="navbar">
      <div className="container">
        <div className="relative flex items-center justify-between text-lg font-bold">
          <div className="logo flex items-center px-10">
            <img src={logo} alt="" className="ml-[-9px] w-16" />
            <a href="/" className="cursor-pointer text-green-700">
              GreeTech
            </a>
          </div>
          <div className="flex items-center xl:max-w-full">
            <HamburgerTech />
            <nav className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:bg-transparent lg:shadow-none" id="nav-menu">
              <ul className="lg:flex lg:justify-between">
                <li className="">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Products" className="nav-link">
                    Product
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
