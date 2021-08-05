import React, { useState } from 'react';

export default function Helpful() {
  const [count, setCount] = useState(Math.floor(Math.random() * 5));

  function handleCount() {
    setCount(() => count + 1);
  }

  return (
    <span
      className="helpful"
    >Helpful?  <u onClick={handleCount}> Yes</u>({count}) | <u>Add Answer</u>
    </span>
  );
}
