import React, { useState, useEffect, useContext } from 'react';
import GalleryThumbnailBar from './GalleryThumbnailBar';
import ProductContext from '../../context';
import ImageExpandModal from './ImageExpandModal';

export default function ImageGallery({ currentStyle }) {
  const { setShowImageModal, showImageModal } = useContext(ProductContext);
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const maxIndex = currentStyle.photos.length - 1;

  function changeCurrentPhoto(photoURL) {
    setCurrentPhoto(photoURL);
  }

  function nextPhoto() {
    setCurrentPhotoIndex(currentPhotoIndex + 1);
    setCurrentPhoto(currentStyle.photos[currentPhotoIndex + 1].url);
  }

  function previousPhoto() {
    setCurrentPhotoIndex(currentPhotoIndex - 1);
    setCurrentPhoto(currentStyle.photos[currentPhotoIndex - 1].url);
  }

  useEffect(() => {
    setCurrentPhoto(currentStyle.photos[currentPhotoIndex].url);
  }, [currentStyle]);

  return (
    <>
      <ImageExpandModal
        currentPhoto={currentPhoto}
        currentPhotoIndex={currentPhotoIndex}
        maxIndex={maxIndex}
        previousPhoto={previousPhoto}
        nextPhoto={nextPhoto}
      />
      <div className="image-gallery-container">
        <img className="main-gallery-photo" src={currentPhoto} alt="cool people, cool things" />
        <div className="gallery-thumb-container">
          <GalleryThumbnailBar
            currentPhotoIndex={currentPhotoIndex}
            currentStyle={currentStyle}
            changeCurrentPhoto={changeCurrentPhoto}
            setCurrentPhotoIndex={setCurrentPhotoIndex}
            maxIndex={maxIndex}
          />
        </div>
        <i onClick={() => setShowImageModal(true)} className="fas image-expand fa-expand" />
        {showImageModal
          ? <div />
          : (
            <div className="arrow-container">
              {currentPhotoIndex === 0 ? <div />
                : <div className="arrow-left"><i onClick={previousPhoto} className="fas image-arrow fa-chevron-left" /></div>}
              {currentPhotoIndex === maxIndex ? <div />
                : <div data-testid="arrow-right" className="arrow-right"><i onClick={nextPhoto} className="fas image-arrow fa-chevron-right" /></div>}
            </div>
          )}
      </div>
    </>
  );
}

