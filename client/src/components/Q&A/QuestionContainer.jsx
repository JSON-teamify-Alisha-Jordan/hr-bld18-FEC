import React, { useState, useContext } from 'react';
import QuestionRow from './QuestionRow';
import AddQuestion from './AddQuestion';
import ProductContext from '../../context';

export default function QuestionContainer({ searchTerm }) {
  const { questions } = useContext(ProductContext);
  const [count, setCount] = useState(2);

  return (
    <>
      <div className="questions-container">
        <QuestionRow
          searchTerm={searchTerm}
          count={count}
        />
      </div>
      <AddQuestion
        count={count}
        setCount={setCount}
        questions={questions}
      />
    </>
  );
}
