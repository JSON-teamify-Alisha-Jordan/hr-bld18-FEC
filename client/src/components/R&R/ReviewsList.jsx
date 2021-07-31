import React from 'react';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';

export default function ReviewsList() {
  return (
    <div>
      <ReviewsListHeader />
      <Review />
      <Review />
    </div>
  );
}
