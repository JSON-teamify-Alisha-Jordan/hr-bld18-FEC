import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageGallery({ currentStyle }) {
  const { styles } = useContext(ProductContext);

  return (
    <div className="image-gallery-container">
      Hi from image gallery!
      {/* <img src={defaultStyle.photos[0].thumbnail_url} alt="person modeling product!" /> */}
    </div>
  );
}
