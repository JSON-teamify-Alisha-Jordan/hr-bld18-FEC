import React from 'react';
import Stars from '../Stars';

export default function RatingSummary() {
  return (
    <div>
      <span className="rr-avg-rating">3.5</span>
      <Stars rating={3.5} />
    </div>
  );
}
