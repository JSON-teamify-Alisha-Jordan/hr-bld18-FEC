import React, { useState, useContext } from 'react';
import ProductContext from '../../context';

export default function AddQuestion({ setCount, questions }) {
  const { setShowAddQuestionModal } = useContext(ProductContext);
  const [expanded, setExpanded] = useState(false);

  function handleQuestionsLength() {
    setCount((prev) => {
      const newCount = prev + 2;
      if (expanded) {
        setExpanded(false);
        return 2;
      }
      if (newCount >= questions.length) {
        setExpanded(true);
      }
      return newCount;
    });
  }

  return (
    <div className="add-question">
      <br />
      <button
        className="more-questions-btn"
        onClick={handleQuestionsLength}
        type="button"
      >
        {!expanded ? 'More Answered Questions' : 'Collapse Questions'}
      </button>
      <button
        className="open-modal-btn"
        onClick={() => setShowAddQuestionModal(true)}
        type="button"
      >
        Add A Question ＋
      </button>
    </div>
  );
}
