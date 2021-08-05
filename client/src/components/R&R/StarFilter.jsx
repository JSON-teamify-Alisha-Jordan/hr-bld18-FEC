import React from 'react';
import ProgressBar from './ProgressBar';

export default function StarFilter({ stars, reviews, totalReviews, toggleFilter, selected }) {
  const percent = (reviews / totalReviews) * 100;
  return (
    <div onClick={toggleFilter} className={`rr-star-filter ${selected ? 'rr-star-filter-selected' : ''}`}>
      <div className="rr-star-filter-child rr-n-stars">
        {`${stars} star${stars > 1 ? 's' : ' '}`}
      </div>
      <ProgressBar percent={percent} />
      <div className="rr-star-filter-child">
        {reviews}
      </div>
    </div>
  );
}
