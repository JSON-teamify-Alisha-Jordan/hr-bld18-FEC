/* eslint-disable no-restricted-syntax */
/* eslint-disable import/extensions */
import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../context';
import ImageGallery from './ImageGallery.jsx';
import InfoContainer from './InfoContainer.jsx';
import FeaturesContainer from './FeaturesContainer.jsx';

export default function Overview() {
  const { styles } = useContext(ProductContext);
  const [currentStyle, setCurrentStyle] = useState(null);

  function findDefaultStyle() {
    for (const style of styles) {
      if (style['default?'] === true) {
        setCurrentStyle(style);
        break;
      }
    }
  }

  function changeSelectedStyle(styleObj) {
    setCurrentStyle(styleObj);
  }

  useEffect(() => {
    findDefaultStyle();
  }, []);

  if (!currentStyle) {
    return (
      <div>Loading... </div>
    );
  }
  return (
    <div className="overview-container">
      <ImageGallery currentStyle={currentStyle} />
      <InfoContainer currentStyle={currentStyle} changeSelectedStyle={changeSelectedStyle} />
      <FeaturesContainer />
    </div>
  );
}
