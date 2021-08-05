import React from 'react';
import StarFilter from './StarFilter';

export default function RatingBreakdown({ ratings, filters, setFilters }) {
  const starFilters = [];
  const appliedFilters = [];

  function toggleFilterN(n) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [n]: !prevFilters[n],
    }));
  }

  function removeAllFilters() {
    setFilters({
      5: false,
      4: false,
      3: false,
      2: false,
      1: false,
    });
  }

  for (let i = 5; i > 0; i -= 1) {
    starFilters.push(<StarFilter
      stars={i}
      reviews={ratings[i]}
      totalReviews={ratings.numReviews}
      selected={filters[i]}
      toggleFilter={() => toggleFilterN(i)}
      key={i}
    />);

    if (filters[i]) {
      appliedFilters.push(`${i} star${i > 1 ? 's' : ''}`);
    }
  }

  let filtersSection = null;
  const filtersList = appliedFilters.join(', ');
  if (filtersList) {
    filtersSection = (
      <div>
        <p>Filters applied: {filtersList}</p>
        <button onClick={removeAllFilters} type="button">Remove all filters</button>
      </div>
    );
  }

  return (
    <div className="rr-rating-breakdown-container">
      <h3>Rating Breakdown</h3>
      {filtersSection}
      {starFilters}
    </div>
  );
}
