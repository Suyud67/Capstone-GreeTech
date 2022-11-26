import React from "react";
import ItemDetail from "../component/ItemDetail";

export default function ProductDetailTech() {
  return (
    <div className="pt-28">
    <h1 className="text-center text-xl font-bold">Detail Product</h1>
    <div className="item w-full px-10 lg:grid lg:grid-cols-4">
      <ItemDetail />
    </div>
  </div>
  );
}