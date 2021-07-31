import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ProductDetails({ currentStyle }) {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div className="product-category">{product.category.toLowerCase()}</div>
      <div className="product-name">{product.name}</div>
      {currentStyle.sale_price === null
        ? <div className="price">${currentStyle.original_price}</div>
        : (
          <div className="price">
            <span style={{ textDecorationLine: 'line-through' }}>${currentStyle.original_price}</span>
            {' '}
            <span style={{ color: 'red' }}>${currentStyle.sale_price}</span>
          </div>
        )}
      <div className="selected-style-display">STYLE > {currentStyle.name.toUpperCase()}</div>
    </>
  );
}
