import React, { useState } from 'react';
// need the answer helpfulness

export default function Report({ helpfulness }) {
  const [count, setCount] = useState(Math.floor(Math.random() * 5));

  function handleCount() {
    setCount(() => count + 1);
  }

  return (
    <span
      className="helpful"
    >Helpful? <u onClick={handleCount}>Yes</u>({helpfulness}) | <u>Report</u>
    </span>
  );
}
