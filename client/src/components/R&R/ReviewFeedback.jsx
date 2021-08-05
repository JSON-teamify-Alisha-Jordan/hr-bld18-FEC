import React from 'react';

export default function ReviewFeedback({ helpfulness }) {
  return (
    <div>
      Helpful?
      <button className="rr-text-button" type="button">Yes ({helpfulness})</button>
      |
      <button className="rr-text-button" type="button">Report</button>
    </div>
  );
}
