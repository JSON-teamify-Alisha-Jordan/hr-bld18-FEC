import React, { useContext, useState } from 'react';
import ProductContext from '../../context';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';
import ReviewsListButtonRow from './ReviewsListButtonRow';

export default function ReviewsList() {
  const { reviews } = useContext(ProductContext);
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('relevant');

  function showTwoMoreReviews() {
    setCount((prevCount) => prevCount + 2);
  }

  return (
    <div className="reviews-list">
      <ReviewsListHeader numReviews={reviews.length} sort={sort} setSort={setSort} />
      <div className="reviews-container">
        {reviews.slice(0, count).map((review) => <Review review={review} key={review.review_id} />)}
      </div>
      <ReviewsListButtonRow showTwoMoreReviews={showTwoMoreReviews} />
    </div>
  );
}
