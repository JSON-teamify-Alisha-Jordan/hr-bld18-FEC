/* eslint-disable import/extensions */
import React from 'react';
// need to import Star Component when that is made.
import ProductDetails from './ProductDetails.jsx';
import StyleSelection from './StyleSelection.jsx';
import CartForm from './CartForm.jsx';

export default function InfoContainer() {
  return (
    <div>
      {/* <StarComponent /> */}
      <ProductDetails />
      <StyleSelection />
      <CartForm />
    </div>
  );
}
