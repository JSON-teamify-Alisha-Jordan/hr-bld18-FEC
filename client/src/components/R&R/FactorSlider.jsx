import React from 'react';

export default function FactorSlider({ name, value }) {
  const percent = ((value - 1) / 4) * 100;

  // positioning for triangle in slider
  const minPosition = -0.5;
  const maxPosition = 12.45;

  return (
    <div className="rr-factor-slider-container">
      <h4>{name}</h4>
      <div className="rr-factor-slider">
        <span style={{ left: `${minPosition + (percent / 100) * (maxPosition - minPosition)}rem` }}>&#9660;</span>
      </div>
      <div>
        <span className="rr-factor-slider-label">Too small</span>
        <span className="rr-factor-slider-label" style={{ float: 'right' }}>Too large</span>
      </div>
    </div>
  );
}
