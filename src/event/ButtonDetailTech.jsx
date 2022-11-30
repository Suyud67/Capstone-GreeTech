import React from 'react';
import { Link } from 'react-router-dom';

export default function ButtonDetailTech({ id }) {
  return (
    <>
      <Link to={`/Product/${id}`} className="button-detail">
        Detail
      </Link>
    </>
  );
}
