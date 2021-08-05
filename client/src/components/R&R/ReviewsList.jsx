import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../../context';
import ReviewsListHeader from './ReviewsListHeader';
import Review from './Review';
import ReviewsListButtonRow from './ReviewsListButtonRow';

export default function ReviewsList({ filters }) {
  const { productID } = useContext(ProductContext);
  const [count, setCount] = useState(2);
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    axios.get('/reviews', {
      params: {
        product_id: productID, sort, page: 1, count: 500,
      },
    })
      .then((result) => result.data.results)
      .then(setReviews);
  }, [sort]);

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
        {filteredReviews.map((review) => <Review review={review} key={review.review_id} />)}
      </div>
      <ReviewsListButtonRow showTwoMoreReviews={showTwoMoreReviews} />
    </div>
  );
}
