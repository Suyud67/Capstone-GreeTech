import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonDetailTech() {
  return (
    <>
      <Link to={'/Product/1'} className="button-detail">
        Detail
      </Link>
    </>
  );
}
