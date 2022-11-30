import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BtnPrevPage() {
  return (
    <>
      <Link to={'/Products'} className="ml-5">
        <FaHome className="inline" /> Product
      </Link>
    </>
  );
}

export default BtnPrevPage;
