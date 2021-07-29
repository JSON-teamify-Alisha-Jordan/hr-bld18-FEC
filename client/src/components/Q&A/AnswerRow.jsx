import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function AnswerRow() {
  const { questions } = useContext(ProductContext);
  const tempAnswerID = 1992098;

  return (
    <div style={{ border: '2px solid slateblue' }}>
      A:
      {questions[1].answers[tempAnswerID].body}
    </div>
  );
}
