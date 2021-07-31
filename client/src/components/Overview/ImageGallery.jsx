import React, { useState, useEffect } from 'react';
import GalleryThumbnailBar from './GalleryThumbnailBar';

export default function ImageGallery({ currentStyle }) {
  const [currentPhoto, setCurrentPhoto] = useState('');

  function changeCurrentPhoto(photoURL) {
    setCurrentPhoto(photoURL);
  }

  useEffect(() => {
    setCurrentPhoto(currentStyle.photos[0].url);
  }, [currentStyle]);

  return (
    <div className="image-gallery-container">
      <img className="main-gallery-photo" src={currentPhoto} alt="cool people, cool things" />
      <div className="gallery-thumb-container">
        <GalleryThumbnailBar currentStyle={currentStyle} changeCurrentPhoto={changeCurrentPhoto} />
      </div>
    </div>
  );
}
