import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ProductDetails() {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div>{product.category}</div>
      <div>{product.name}</div>
    </>
  );
}
