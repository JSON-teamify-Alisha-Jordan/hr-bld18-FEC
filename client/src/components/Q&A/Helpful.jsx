import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function Helpful({ helpfulness }) {
  const { setShowAddAnswerModal } = useContext(ProductContext);
  function handleCount() {
  }

  return (
    <span className="helpful"> Helpful?
      <u onClick={handleCount}> Yes </u>
      ({helpfulness}) | <span onClick={() => setShowAddAnswerModal(true)}><u>Add Answer</u></span>
    </span>
  );
}
