import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonTech() {
  return (
    <>
      <Link to={'/Product'} className="rounded-md bg-green-600 p-3 text-white hover:bg-lime-800">
        LEARN MORE
      </Link>
    </>
  );
}
