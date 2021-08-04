/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import CartForm from './CartForm';

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
              <div className="style-holder" key={style.style_id}>
                <img
                  value={style.style_id}
                  className="style-select-thumb"
                  src={style.photos[0].thumbnail_url}
                  alt="cool person in product"
                  onClick={handleStyleSelection}
                />
                <i className="far checkmark-overlay fa-check-circle" />
              </div>
            )
            : (
              <div className="style-holder" key={style.style_id}>
                <img
                  value={style.style_id}
                  className="style-select-thumb-transparent"
                  src={style.photos[0].thumbnail_url}
                  alt="cool person in product"
                  onClick={handleStyleSelection}
                />
              </div>
            )
        ))}
      </div>
      <CartForm currentStyle={currentStyle} />
    </>
  );
}
