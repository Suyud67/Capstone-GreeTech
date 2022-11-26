import React from "react";
import twitter from "../img/twitter.png";
import facebook from "../img/facebook.png";
import linkedin from "../img/linkedin.png";
import { Link } from "react-router-dom";

export default function footerTech() {
  return (
    <div className="box h-auto w-full bg-slate-700 px-10 pt-5 pb-2 text-white">
      <div className="copyrigh  justify-between lg:flex">
        <div className="logo lg:w-2/5">
          <div className="text">
            <h1 className="text-xl">GreeTech</h1>
            <p className="">
            GreeTech merupakan Website yang dapat membantu user mempromosikan tanaman mereka dan juga para user dapat berinteraksi 
            dengan fitur diskusi.
            </p>
            <br></br>
          </div>
        </div>
        <div className="flex items-center justify-between py-5 lg:w-2/4 lg:py-0">
          <div className="sidemap lg:mt-[-20px]">
            <h1 className="text-xl">Sidemap</h1>
            <div className="List lg:flex">
              <h1 className="lg:mr-2">
                <Link to="/">
                  Home
                </Link>
              </h1>
              <h1 className="lg:mr-2">
                <Link to="/Product">
                  Product
                </Link>
              </h1>
              <h1 className="lg:mr-2">
                <Link to="/Contact">
                  Contact
                </Link>
              </h1>
              <h1 className="lg:mr-2">
              <Link to="/About">
                  About
                </Link>
              </h1>
            </div>
          </div>
          <div className="connect ">
            <h1 className="text-xl">Connect</h1>
            <div className="List flex">
              <div className="twitter flex items-center">
                <a href="http://dicoding.com" className="block cursor-pointer">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="m-auto h-10 w-10"
                  />
                  <h1 className="px-2">Twitter</h1>
                </a>
              </div>
              <div className="facebook my-1 flex items-center">
                <a
                  href="http://dicoding.com"
                  className=" cursor-pointer text-center"
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="m-auto h-10 w-10"
                  />
                  <h1 className="px-2">Facebook</h1>
                </a>
              </div>
              <div className="linkedin my-1 flex cursor-pointer items-center">
                <a
                  targer="_blank"
                  href="http://dicoding.com"
                  className="cursor-pointer items-center text-center"
                >
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="m-auto h-10 w-10"
                  />
                  <h1 className="px-2">Linkedin</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>&copy; 2022 Tim C22-065 SIB x Dicoding.com Batch 3</span>
      </div>
    </div>
  );
}
