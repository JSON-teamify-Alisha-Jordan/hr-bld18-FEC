import React, { useState } from 'react';

export default function Helpful() {
  const [count, setCount] = useState(Math.floor(Math.random() * 5));

  function handleCount() {
    setCount(() => count + 1);
  }

  return (
    <div
      className="helpful"
      style={{ border: '2px solid slateblue' }}
    >
      Helpful? <u onClick={handleCount}>Yes</u>({count}) | Add Answer
    </div>
  );
}
