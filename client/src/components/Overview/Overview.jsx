/* eslint-disable import/extensions */
import React from 'react';
import ImageGallery from './ImageGallery.jsx';
import InfoContainer from './InfoContainer.jsx';
import FeaturesContainer from './FeaturesContainer.jsx';

export default function Overview() {
  return (
    <div className="overview-container">
      <ImageGallery />
      <InfoContainer />
      <FeaturesContainer />
    </div>
  );
}
