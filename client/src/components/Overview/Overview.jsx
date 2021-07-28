/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../../context';
import ImageGallery from './ImageGallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import FeaturesContainer from './FeaturesContainer.jsx';

export default function Overview() {
  const productID = useContext(ProductContext);

  if (styles.length === 0 || Object.keys(currentProduct).length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ProductContext.Provider value={{
      currentProduct,
      styles,
    }}
    >
      <ImageGallery />
      <ProductDetails />
      <FeaturesContainer />
    </ProductContext.Provider>
  );
}
