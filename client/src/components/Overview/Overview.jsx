/* eslint-disable import/extensions */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../../context';
import ImageGallery from './ImageGallery.jsx';
import ProductDetails from './ProductDetails.jsx';
import FeaturesContainer from './FeaturesContainer.jsx';

export default function Overview() {
  const { products } = useContext(ProductContext);
  const [currentProduct, setCurrentProduct] = useState({});
  const [styles, setStyles] = useState([]);

  function fetchStyles() {
    axios.get(`/products/${products[0].id}/styles`).then((result) => result.data.results).then(setStyles);
  }

  function fetchCurrentProduct() {
    axios
      .get(`/products/${products[0].id}`)
      .then((result) => result.data)
      .then(setCurrentProduct);
  }

  useEffect(() => {
    fetchCurrentProduct();
  }, []);

  useEffect(() => {
    fetchStyles();
  }, []);

  if (styles.length === 0) {
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
      <ImageGallery
        styles={styles}
      />
      <ProductDetails
        currentProduct={currentProduct}
        styles={styles}
      />
      <FeaturesContainer currentProduct={currentProduct} />
    </ProductContext.Provider>
  );
}
