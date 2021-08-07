/* eslint-disable import/extensions */
import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import ProductContext from '../../context';

export default function ImageExpandModal({
  currentPhoto,
  currentPhotoIndex,
  nextPhoto,
  previousPhoto,
  maxIndex,
}) {
  const { showImageModal, setShowImageModal } = useContext(ProductContext);
  const imageRef = useRef();
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  function handleMouseMove(event) {
    setMousePosition({ left: event.clientX, top: event.clientY });
    const bgPosX = (((mousePosition.left - 316) / dimensions.width) * 100);
    const bgPosY = (((mousePosition.top - 84) / dimensions.height) * 100);
    imageRef.current.style.backgroundPosition = `${bgPosX}% ${bgPosY}%`;
  }

  function handleMouseLeave() {
    imageRef.current.style.backgroundPosition = 'center';
  }

  useLayoutEffect(() => {
    if (imageRef.current) {
      setDimensions({
        width: imageRef.current.offsetWidth,
        height: imageRef.current.offsetHeight,
      });
    }
  }, []);

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
          <button className="btn-close" onClick={() => setShowImageModal(false)} type="button">
            Close
          </button>
        </div>
        <div className="modal-image-container">
          <div ref={imageRef} onMouseMove={(event) => handleMouseMove(event)} onMouseLeave={handleMouseLeave} className="overview-modal-image" style={{ backgroundImage: `url(${currentPhoto})` }} />
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
