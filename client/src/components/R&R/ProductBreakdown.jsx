/* eslint-disable guard-for-in */
import React from 'react';
import FactorSlider from './FactorSlider';

export default function ProductBreakdown({ characteristics }) {
  const sliders = [];

  for (const characteristic in characteristics) {
    const { value, id } = characteristics[characteristic];
    sliders.push(<FactorSlider name={characteristic} value={value} key={id} />);
  }
  return (
    <div className="rr-product-breakdown">
      {sliders}
    </div>
  );
}
