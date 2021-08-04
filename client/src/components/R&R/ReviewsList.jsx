import React, { useContext } from 'react';
import ProductContext from '../../context';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';
import ReviewsListButtonRow from './ReviewsListButtonRow';

export default function ReviewsList() {
  const { reviews } = useContext(ProductContext);

  return (
    <div>
      <ReviewsListHeader numReviews={reviews.length} />
      {reviews.map((review) => <Review review={review} key={review.review_id} />)}
      <ReviewsListButtonRow />
    </div>
  );
}
