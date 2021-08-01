import React from 'react';

export default function ProgressBar({percent}) {
  return (
    <div className="rr-progress-bar-container">
      <div style={{ width: `${percent}%` }} className="rr-progress-bar" />
    </div>
  );
}
