import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function AddQuestion({ setCount }) {
  const { setShowAddQuestionModal } = useContext(ProductContext);
  return (
    <div
      className="add-question"
    >
      <br />
      <button
        className="more-questions-btn"
        onClick={setCount}
        type="button"
      >
        More Answered Questions
      </button>
      <button
        className="open-modal-btn"
        onClick={() => setShowAddQuestionModal(true)}
        type="button"
      >
        Add A Question ✚
      </button>
    </div>
  );
}
