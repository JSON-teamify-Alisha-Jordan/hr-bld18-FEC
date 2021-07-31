/* eslint-disable import/extensions */
import React from 'react';
import Breakdown from './Breakdown.jsx';
import ReviewsList from './ReviewsList.jsx';

export default function RR() {
  return (
    <div className="RR-container">
      <h2 className="RR-header">Ratings & Reviews</h2>
      <Breakdown />
      <ReviewsList />
    </div>
  );
}
