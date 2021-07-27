import React, { useContext, useState } from 'react';
import ProductContext from '../../context';

export default function ProductDetails() {
  const { currentProduct, styles } = useContext(ProductContext);
  const { photos } = styles[0];
  return (
    <div>
      {/* <StyleSelection /> */}
    </div>
  );
}
