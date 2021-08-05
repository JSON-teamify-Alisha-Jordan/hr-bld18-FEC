import React, { useState } from 'react';
import QuestionRow from './QuestionRow';
import AddQuestion from './AddQuestion';

export default function QuestionContainer({ searchTerm, setShow }) {
  const [count, setCount] = useState(2);

  function incrementQuestionCount() {
    setCount(count + 2);
  }

  return (
    <>
      <div
        className="questions-container"
      >
        <QuestionRow searchTerm={searchTerm} count={count} />
      </div>
      <AddQuestion setShow={setShow} count={count} setCount={incrementQuestionCount} />
    </>
  );
}
