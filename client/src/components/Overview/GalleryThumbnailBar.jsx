/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default function GalleryThumbnailBar({
  currentStyle,
  changeCurrentPhoto,
  setCurrentPhotoIndex,
}) {
  function handlePhotoChange(event) {
    changeCurrentPhoto(event.target.attributes[1].value);
    setCurrentPhotoIndex(+(event.target.attributes[0].value));
  }
  return (
    <>
      {currentStyle.photos.map((photo, index) => (
        <img
          index={index}
          key={photo.thumbnail_url}
          value={photo.url}
          className="gallery-thumb"
          src={photo.thumbnail_url}
          alt="cool person in product"
          onClick={handlePhotoChange}
        />
      ))}
    </>
  );
}
