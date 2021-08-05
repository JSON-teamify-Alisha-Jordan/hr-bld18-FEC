import React from 'react';
import Stars from '../Stars';

export default function RatingSummary({ rating }) {
  return (
    <div>
      <span className="rr-avg-rating">{rating.toFixed(2)}</span>
      <Stars rating={rating} />
    </div>
  );
}
