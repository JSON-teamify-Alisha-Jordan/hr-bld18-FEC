import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageGallery() {
  // const { styles } = useContext(ProductContext);
  // need the currently selected style from the style selector component.
  // let defaultStyle;

  return (
    <div className="image-gallery-container">
      Hi from image gallery!
      {/* <img src={defaultStyle.photos[0].thumbnail_url} alt="person modeling product!" /> */}
    </div>
  );
}
