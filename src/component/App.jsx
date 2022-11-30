import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './NavbarTech';
import Footer from './FooterTech';
import HomeTech from '../pages/HomeTech';
import ProductTech from '../pages/ProductTech';
import ContactTech from '../pages/ContactTech';
import About from '../pages/About';
import DetailPage from '../pages/DetailPage';
import AddProductPage from '../pages/AddProduct';

// main component
function App() {
  return (
    <div className="Note-app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomeTech />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<ProductTech />} />
          <Route path="/Contact" element={<ContactTech />} />
          <Route path="/Product/:id" element={<DetailPage />} />
          <Route path="/Add" element={<AddProductPage />} />
        </Routes>
      </main>
      <footer className="pt-5">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
