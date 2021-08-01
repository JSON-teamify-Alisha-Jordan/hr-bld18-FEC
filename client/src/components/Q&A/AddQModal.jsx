/* eslint-disable import/extensions */
import React from 'react';

export default function AddQModal({ show, setShow }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        border: '2px solid slateblue',
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        zIndex: show ? '1' : '-1',
        position: 'relative',
      }}
    >
      <div className="modal-header">
        <p>Hello from Modal</p>
        <span
          onClick={() => setShow(false)}
          className="qa-close-modal-btn"
        >X
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>Modal</h4>
          <p>Some words to read</p>
        </div>
        <div className="modal-footer">
          <button
            className="btn-close"
            onClick={() => setShow(false)}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
