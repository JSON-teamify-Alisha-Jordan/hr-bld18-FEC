/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import CartForm from './CartForm.jsx';

export default function StyleSelection() {
  const { styles } = useContext(ProductContext);
  let currentStyle;
  for (const style of styles) {
    if (style['default?']) {
      currentStyle = style;
      break;
    }
  }
  // need to set default style to the one that has default? set to true
  return (
    <>
      <div>Hi from StyleSelection</div>
      {/* need to iterate through styles and grab first thumbnail_url from each style to
      use for thumbnail. */}
      {styles.map((style) => (
        <img value={style.style_id} className="style-select-thumb" src={style.photos[0].thumbnail_url} alt="cool person in product" />
      ))}
      <CartForm />
    </>
  );
}