import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ show, close, children }) {
  if (!show) {
    return null;
  }

  return ReactDOM.createPortal(
    <div id="rr-modal-backdrop" onClick={close}>
      <div className="rr-modal" onClick={(e) => { e.stopPropagation(); }}>
        <i onClick={close} className="far fa-window-close rr-close-modal-button" />
        {children}
      </div>
    </div>,
    document.body,
  );
}
