/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import AnswerRow from './AnswerRow.jsx';
import Helpful from './Helpful.jsx';

export default function QuestionRow() {
  const { questions } = useContext(ProductContext);

  let count = 2;
  const renderedQuestions = questions.slice(0, count);
  return (
    <div style={{ border: '2px solid slateblue' }}>
      {renderedQuestions.map((question) => <span>Q: {question.question_body}</span>)}
      {console.log(renderedQuestions)}
      <Helpful />
      <AnswerRow />
    </div>
  );
}
