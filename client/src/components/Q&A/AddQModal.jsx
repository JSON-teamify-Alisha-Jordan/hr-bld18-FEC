import React from 'react';

export default function AddQModal({ show, setShow }) {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? 'translate(0, 60em)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0',
        zIndex: show ? '1' : '-1',
        position: 'absolute',
        left: '25%',
        top: '25%',
      }}
    >
      <div className="modal-header">
        <p>Hello from Modal</p>
        <span
          onClick={() => setShow(false)}
          className="qa-close-modal-btn"
        ><b>X</b>
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
            <b>Close</b>
          </button>
        </div>
      </div>
    </div>
  );
}
