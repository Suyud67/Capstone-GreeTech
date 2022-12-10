import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMap() {
  return (
    <div className="List flex flex-col gap-3 md:flex-row">
      <Link to={'/'} className="link-item">
        Home
      </Link>
      <Link to={'/About'} className="link-item">
        About
      </Link>
      <Link to={'/Products'} className="link-item">
        Product
      </Link>
      <Link to={'/Contact'} className="link-item">
        Contact
      </Link>
    </div>
  );
}
