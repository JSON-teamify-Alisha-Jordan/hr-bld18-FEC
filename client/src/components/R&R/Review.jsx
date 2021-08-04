import React from 'react';
import ReviewTopRow from './ReviewTopRow';
import ReviewBody from './ReviewBody';
import ReviewFeedback from './ReviewFeedback';

export default function Review({ review }) {
  return (
    <div className="review-container">
      <ReviewTopRow review={review} />
      <ReviewBody review={review} />
      <ReviewFeedback helpfulness={review.helpfulness} />
    </div>
  );
}
