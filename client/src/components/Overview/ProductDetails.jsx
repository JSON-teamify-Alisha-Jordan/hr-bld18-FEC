import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ProductDetails({ currentStyle }) {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div data-testid="category" className="product-category">{product.category.toLowerCase()}</div>
      <div data-testid="productName" className="product-name">{product.name}</div>
      {currentStyle.sale_price === null
        ? <div data-testid="price" className="price">${currentStyle.original_price}</div>
        : (
          <div className="price">
            <span className="original-price">${currentStyle.original_price}</span>
            {' '}
            <span className="sale-price">${currentStyle.sale_price}</span>
          </div>
        )}
      <div data-testid="selectedStyle" className="selected-style-display">STYLE &gt; {currentStyle.name.toUpperCase()}</div>
    </>
  );
}
