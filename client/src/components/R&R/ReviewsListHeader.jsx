import React from 'react';

export default function ReviewsListHeader({ numReviews, sort, setSort }) {
  const sortSelect = (
    <select value={sort} onChange={(event) => setSort(event.target.value)}>
      <option selected value="relevant">relevance</option>
      <option value="helpful">helpfulness</option>
      <option value="newest">date (newest to oldest)</option>
    </select>
  );

  return (
    <div className="reviews-list-header">
      <p>
        {numReviews} reviews, sorted by {sortSelect}
      </p>
    </div>
  );
}
