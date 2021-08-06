import React from 'react';
// need the answer helpfulness

export default function Report({ helpfulness }) {
  function handleCount() {
  }

  return (
    <span
      className="helpful"
    >Helpful? <u onClick={handleCount}>Yes</u>({helpfulness}) | <u>Report</u>
    </span>
  );
}
