import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMap() {
  return (
    <div className="List lg:flex">
      <Link to={'/'} className="lg:mr-2">
        Home
      </Link>
      <Link to={'/About'} className="lg:mr-2">
        About
      </Link>
      <Link to={'/Product'} className="lg:mr-2">
        Product
      </Link>
      <Link to={'/Contact'} className="lg:mr-2">
        Contact
      </Link>
    </div>
  );
}
