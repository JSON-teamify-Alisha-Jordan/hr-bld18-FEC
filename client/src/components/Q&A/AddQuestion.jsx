/* eslint-disable import/extensions */
import React from 'react';

export default function AddQuestion({ setShow }) {
  return (
    <div
      className="addQuestion"
      style={{ border: '2px solid slateblue' }}
    >
      Hello from Add Question
      <br />
      <button type="button">More Answered Questions</button>
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
