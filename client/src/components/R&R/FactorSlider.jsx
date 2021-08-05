import React from 'react';

export default function FactorSlider({ name, value }) {
  // convert value (1-5 scale) to a percentage - 1 is 0%, 5 is 100%
  const percent = ((value - 1) / 4) * 100;

  // positioning for triangle in slider
  const minPosition = -0.5;
  const maxPosition = 12.45;
  // calculate position where 0% is minPosition, 100% is maxPosition
  const offset = minPosition + (percent / 100) * (maxPosition - minPosition);

  return (
    <div className="rr-factor-slider-container">
      <h4>{name}</h4>
      <div className="rr-factor-slider">
        <span style={{ left: `${offset}rem` }}>&#9660;</span>
      </div>
      <div className="rr-factor-slider-labels">
        <span className="rr-factor-slider-label">Too small</span>
        <span className="rr-factor-slider-label rr-right-label">Too large</span>
      </div>
    </div>
  );
}
