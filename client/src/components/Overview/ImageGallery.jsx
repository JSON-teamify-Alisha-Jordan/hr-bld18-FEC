import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageGallery() {
  const { styles } = useContext(ProductContext);
  return (
    <div>
      Hi!
    </div>
  );
}
