import React from 'react';
import Stars from '../Stars';

export default function AverageRatingRow() {
  return (
    <div>
      <span className="avg-rating">3.5</span>
      <Stars rating={3.5} />
    </div>
  );
}
