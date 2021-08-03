/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';

export default function GalleryThumbnailBar({
  currentStyle,
  changeCurrentPhoto,
  setCurrentPhotoIndex,
  maxIndex,
}) {
  const [renderedThumbnails, setRenderedThumbnails] = useState([]);
  const [minIndex, setMinIndex] = useState(0);

  function handlePhotoChange(event) {
    changeCurrentPhoto(event.target.attributes[1].value);
    let originalIndex;
    for (const photo of currentStyle.photos) {
      if (photo.url === event.target.attributes[1].value) {
        originalIndex = currentStyle.photos.indexOf(photo);
      }
    }
    setCurrentPhotoIndex(originalIndex);
  }

  function showPreviousImageThumb() {
    setRenderedThumbnails(currentStyle.photos.slice(minIndex - 1, minIndex + 6));
    setMinIndex(minIndex - 1);
  }

  function showNextImageThumb() {
    setRenderedThumbnails(currentStyle.photos.slice(minIndex + 1, minIndex + 8));
    setMinIndex((prevMinIndex) => prevMinIndex + 1);
  }

  useEffect(() => {
    setRenderedThumbnails(currentStyle.photos.slice(minIndex, minIndex + 7));
  }, [currentStyle]);

  return (
    <>
      {minIndex === 0
        ? null
        : <i onClick={showPreviousImageThumb} className="fas fa-chevron-up" />}
      {renderedThumbnails.map((photo, index) => (
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
      {minIndex + 6 === maxIndex
        ? null
        : <i onClick={showNextImageThumb} className="fas fa-chevron-down" />}
    </>
  );
}
