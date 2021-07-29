/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import AnswerRow from './AnswerRow.jsx';
import Helpful from './Helpful.jsx';

export default function QuestionRow() {
  const { questions } = useContext(ProductContext);

  return (
    <div style={{ border: '2px solid slateblue' }}>
      Q:
      {/* this will be dynamically rendered based on which style is selected */}
      {questions[1].question_body}
      <Helpful />
      <AnswerRow />
    </div>
  );
}
