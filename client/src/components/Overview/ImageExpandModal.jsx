/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageExpandModal({
  currentPhoto,
  currentPhotoIndex,
  nextPhoto,
  previousPhoto,
  maxIndex,
}) {
  const { showImageModal, setShowImageModal } = useContext(ProductContext);
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: showImageModal ? 'translateY(-96vh)' : 'translateY(-100vh)',
        opacity: showImageModal ? '1' : '0',
        zIndex: showImageModal ? '1' : '-1',
        position: 'relative',
      }}
    >
      <div className="modal-content">
        <div className="modal-footer">
          <button
            className="btn-close"
            onClick={() => setShowImageModal(false)}
            type="button"
          >
            Close
          </button>
        </div>
        <div className="modal-image-container">
          <img className="overview-modal-image" src={currentPhoto} alt="cool people in cool clothing" />
          <div className="arrow-container-expanded">
            {currentPhotoIndex === 0 ? <div />
              : <div><i onClick={previousPhoto} className="fas image-arrow-expanded fa-chevron-left" /></div>}
            {currentPhotoIndex === maxIndex ? <div />
              : <div><i onClick={nextPhoto} className="fas image-arrow-expanded fa-chevron-right" /></div>}
          </div>
        </div>
      </div>
    </div>
  );
}
