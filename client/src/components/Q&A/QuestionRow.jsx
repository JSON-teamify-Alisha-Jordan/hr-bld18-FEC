/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import AnswerRow from './AnswerRow';
import Helpful from './Helpful';

export default function QuestionRow({ searchTerm }) {
  const { questions } = useContext(ProductContext);

  let count = 2;
  const renderedQuestions = questions.slice(0, count).filter(
    (question) => question.question_body.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1,
  );
  return (
    <div
      className="questions-row"
      style={{ border: '2px solid slateblue' }}
    >
      <Helpful />
      {renderedQuestions.map((question) => (
        <div key={question.question_id}>
          Q:
          {question.question_body}
          <AnswerRow questionId={question.question_id} />
        </div>
      ))}
    </div>
  );
}
