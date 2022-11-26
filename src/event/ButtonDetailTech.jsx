import React from "react";
import { Link } from "react-router-dom";

export default function ButtonDetailTech() {
  return (
    <>
      <button className="button-detail">
        <Link to="/Detail" className="nav-link-button">
          Detail
        </Link>  
      </button>
    </>
  );
}
