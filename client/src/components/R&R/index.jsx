/* eslint-disable import/extensions */
import React, { useState } from 'react';
import Breakdown from './Breakdown';
import ReviewsList from './ReviewsList';
import AddReviewModal from './AddReviewModal';

export default function RatingsAndReviews() {
  const [filters, setFilters] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });

  return (
    <div className="rr-container">
      <h2 id="ratings_and_reviews" className="rr-header">Ratings & Reviews</h2>
      <Breakdown filters={filters} setFilters={setFilters} />
      <ReviewsList filters={filters} />
      <AddReviewModal />
    </div>
  );
}
