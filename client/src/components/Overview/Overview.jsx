import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../../context';
import ImageGallery from './ImageGallery';
import InfoContainer from './InfoContainer';
import FeaturesContainer from './FeaturesContainer';

export default function Overview() {
  const { styles } = useContext(ProductContext);
  const [currentStyle, setCurrentStyle] = useState(null);

  function findDefaultStyle() {
    const defaultStyle = styles.find((style) => style['default?'] === true);
    setCurrentStyle(defaultStyle);
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
