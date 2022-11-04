import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./NavbarTech";
import Footer from "./FooterTech";
import HomeTech from "../pages/HomeTech";
import ProductTech from "../pages/ProductTech";
import ContactTech from "../pages/ContactTech";
import AboutTech from "../pages/AboutTech";

function App() {
  return (
    <div className="Note-app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeTech />} />
          <Route path="/Product" element={<ProductTech />} />
          <Route path="/Contact" element={<ContactTech />} />
          <Route path="/About" element={<AboutTech />} />
        </Routes>
      </main>
      <footer className="pt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
