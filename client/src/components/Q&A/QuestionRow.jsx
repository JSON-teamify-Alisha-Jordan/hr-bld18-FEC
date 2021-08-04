/* eslint-disable import/extensions */
import React, { useContext, useState } from 'react';
import ProductContext from '../../context';
import AnswerRow from './AnswerRow';
import Helpful from './Helpful';

export default function QuestionRow({ searchTerm }) {
  const { questions } = useContext(ProductContext);
  const [count, setCount] = useState(2);

  function incrementCount() {
    setCount(count + 2);
  }

  const renderedQuestions = questions.slice(0, count).filter(
    (question) => question.question_body.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );

  console.log(questions);
  return (
    <div
      className="question-row"
    >
      {renderedQuestions.map((question) => (
        <div
          className="question"
          key={question.question_id}
        >
          <b>Q: {question.question_body}</b> <Helpful />
          <AnswerRow
            questionId={question.question_id}
            count={incrementCount}
          />
          <br />
        </div>
      ))}
    </div>
  );
}
