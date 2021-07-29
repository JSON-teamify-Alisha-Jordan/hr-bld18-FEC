/* eslint-disable import/extensions */
import React from 'react';
// need to import Star Component when that is made.
import ProductDetails from './ProductDetails.jsx';
import StyleSelection from './StyleSelection.jsx';

export default function InfoContainer() {
  return (
    <div className="info-container">
      {/* <StarComponent /> */}
      <ProductDetails />
      <StyleSelection />
    </div>
  );
}
