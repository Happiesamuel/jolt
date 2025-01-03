import React from "react";

export default function ProductDescription({ product }) {
  return (
    <div className="w-[50%]">
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
