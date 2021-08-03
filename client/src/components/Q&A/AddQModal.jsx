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
        <b><h2>Add a Question</h2></b>
        <span
          onClick={() => setShow(false)}
          className="qa-close-modal-btn"
        ><b>X</b>
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div className="modal-top-info">
            <h3>Nickname</h3>
            <h3>Email</h3>
          </div>
          <div className="modal-nickname-email">
            <input type="text" placeholder="Example: jackson11!" />
            <input type="text" placeholder="aperson@gmail.com" />
          </div>
          <div className="modal-info">
            <span>For privacy reasons, do not use your full name or email address</span>
            <span>For authentication reasons, you will not be emailed</span>
          </div>
          <textarea
            className="modal-input"
            placeholder="Why did you like the product or not?"
          />
        </div>
        <div className="modal-footer">
          <button
            className="btn-add"
            type="button"
          >
            <b>Add Question</b>
          </button>
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
