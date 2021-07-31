import React from 'react';

export default function GalleryThumbnailBar({ currentStyle, changeCurrentPhoto }) {
  function handlePhotoChange(event) {
    const photoURL = event.target.attributes[0].value;
    changeCurrentPhoto(photoURL);
  }
  return (
    <>
      {currentStyle.photos.map((photo) => (
        <img
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
