/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ImageExpandModal({ currentPhoto }) {
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
        <div>
          <img src={currentPhoto} alt="cool people in cool clothing" />
        </div>
      </div>
    </div>
  );
}