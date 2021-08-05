import React from 'react';

export default function ReviewsListHeader({ numReviews }) {
  return (
    <div className="reviews-list-header">
      <p>
        {numReviews} reviews, sorted by <em>relevance</em>
      </p>
    </div>
  );
}
