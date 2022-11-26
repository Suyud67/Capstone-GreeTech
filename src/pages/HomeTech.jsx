import React from "react";
import Home from "../component/Home";
import ItemTech from "../component/ItemTech";
import About from "../component/About";

export default function HomeTech() {
  return (
    <>
      <Home />
      <div className="about mt-40">
        <h1 className="text-center text-xl font-bold">About Us</h1>
        <About />
      </div>
      <div className="product px-10">
        <h1 className="py-0 text-center text-xl font-bold">Top Product</h1>
        <div className="md:grid-col-2 grid w-full lg:grid-cols-4">
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
          <ItemTech />
        </div>
      </div>
    </>
  );
}
