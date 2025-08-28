// app/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.product_name} />
      <h3>{product.product_name}</h3>
      <p>{product.title}</p>
      <p><strong>₹{product.price}</strong></p>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;
