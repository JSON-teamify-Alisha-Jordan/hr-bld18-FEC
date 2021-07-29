import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ProductDetails() {
  const { product } = useContext(ProductContext);
  return (
    <>
      <div>Hi! from cart!</div>
    </>
  );
}