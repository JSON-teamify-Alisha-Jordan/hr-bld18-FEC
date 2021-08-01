import React from 'react';
import StarFilter from './StarFilter';

export default function RatingBreakdown() {
  const starFilters = [];

  for (let i = 5; i > 0; i -= 1) {
    starFilters.push(<StarFilter key={i} stars={i} />);
  }
  return (
    <div>
      {starFilters}
    </div>
  );
}
