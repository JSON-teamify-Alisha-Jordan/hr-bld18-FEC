import React from 'react';
import StarFilter from './StarFilter';

export default function RatingBreakdown({ ratings, filters, toggleFilterN }) {
  const starFilters = [];

  for (let i = 5; i > 0; i -= 1) {
    starFilters.push(<StarFilter
      stars={i}
      reviews={ratings[i]}
      totalReviews={ratings.numReviews}
      selected={filters[i]}
      toggleFilter={() => toggleFilterN(i)}
      key={i}
    />);
  }
  return (
    <div>
      {starFilters}
    </div>
  );
}
