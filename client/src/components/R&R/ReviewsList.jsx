import React, { useState } from 'react';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';
import ReviewsListButtonRow from './ReviewsListButtonRow';

export default function ReviewsList({ filters, sort, setSort, reviews }) {
  const [count, setCount] = useState(2);

  function showTwoMoreReviews() {
    setCount((prevCount) => prevCount + 2);
  }

  if (!reviews) {
    return <div>Loading...</div>;
  }

  let anyFiltersOn = false;
  for (let i = 1; i <= 5; i++) {
    anyFiltersOn = anyFiltersOn || filters[i];
  }

  const filteredReviews = reviews.filter((review) => !anyFiltersOn
    || filters[review.rating]).slice(0, count);

  return (
    <div className="reviews-list">
      <ReviewsListHeader numReviews={reviews.length} sort={sort} setSort={setSort} />
      <div className="reviews-container">
        {filteredReviews.map((review) => (
          <Review review={review} key={review.review_id} />
        ))}
      </div>
      <ReviewsListButtonRow showTwoMoreReviews={showTwoMoreReviews} />
    </div>
  );
}
