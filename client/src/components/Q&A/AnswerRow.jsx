/* eslint-disable import/extensions */
import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function AnswerRow() {
  const { questions } = useContext(ProductContext);

  return (
    <div style={{ border: '2px solid slateblue' }}>
      A:
      {console.log(questions)}
    </div>
  );
}
