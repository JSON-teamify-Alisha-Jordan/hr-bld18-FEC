import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageGallery({ currentStyle }) {
  return (
    <div className="image-gallery-container">
      <img src={currentStyle.photos[1].thumbnail_url} alt="person modeling product!" />
    </div>
  );
}
