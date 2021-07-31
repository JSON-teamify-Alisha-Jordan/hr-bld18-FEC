/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import CartForm from './CartForm.jsx';

export default function StyleSelection({ currentStyle, changeSelectedStyle }) {
  const { styles } = useContext(ProductContext);

  function handleStyleSelection(event) {
    const selectionId = event.target.attributes[0].value;
    const newSelection = styles.find((style) => +(style.style_id) === +(selectionId));
    changeSelectedStyle(newSelection);
  }

  return (
    <>
      <div className="style-selection-container">
        {styles.map((style) => (
          style.style_id === currentStyle.style_id
            ? (
              <img
                key={style.style_id}
                value={style.style_id}
                className="style-select-thumb"
                src={style.photos[0].thumbnail_url}
                alt="cool person in product"
                onClick={handleStyleSelection}
              />
            )
            : (
              <img
                key={style.style_id}
                value={style.style_id}
                className="style-select-thumb-transparent"
                src={style.photos[0].thumbnail_url}
                alt="cool person in product"
                onClick={handleStyleSelection}
              />
            )
        ))}
      </div>
      <CartForm currentStyle={currentStyle} />
    </>
  );
}
