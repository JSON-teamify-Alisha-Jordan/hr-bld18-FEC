import React from 'react';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';
import ReviewsListButtonRow from './ReviewsListButtonRow';

export default function ReviewsList() {
  return (
    <div>
      <ReviewsListHeader />
      <Review />
      <Review />
      <ReviewsListButtonRow />
    </div>
  );
}
