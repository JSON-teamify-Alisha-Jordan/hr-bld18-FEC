/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function AnswerRow() {
  const { questions } = useContext(ProductContext);
  const tempID = '1992098';
  const tempQuestion = questions[1];

  return (
    <div
      className="answersRow"
      style={{ border: '2px solid slateblue' }}
    >
      A:
      {/* {questions.map((question) => question.answers.body)} */}
      {tempQuestion.answers[tempID].body}
    </div>
  );
}
