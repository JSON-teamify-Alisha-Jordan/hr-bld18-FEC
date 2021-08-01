import React from 'react';
import ProgressBar from './ProgressBar';

export default function StarFilter({stars}) {
  return (
    <div className="rr-star-filter">
      <div className="rr-star-filter-child rr-n-stars">
        {`${stars} star${stars > 1 ? 's' : ' '}`}
      </div>
      <ProgressBar percent={50} />
      <div className="rr-star-filter-child">
        500
      </div>
    </div>
  );
}
