/* eslint-disable import/extensions */
import React from 'react';

export default function AddQuestion({ setShow }) {
  return (
    <div
      className="add-question"
      style={{ border: '2px solid slateblue' }}
    >
      <br />
      <button
        className="more-questions-btn"
        // onClick={setCount}
        type="button"
      >
        More Answered Questions
      </button>
      <button
        className="open-modal-btn"
        onClick={() => setShow(true)}
        type="button"
      >
        Add A Question ✚
      </button>
    </div>
  );
}
