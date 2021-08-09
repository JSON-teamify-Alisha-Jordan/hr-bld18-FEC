/* eslint-disable import/extensions */
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import ProductContext from '../../context';
import Breakdown from './Breakdown';
import ReviewsList from './ReviewsList';
import AddReviewModal from './AddReviewModal';

export default function RatingsAndReviews() {
  const [reviews, setReviews] = useState(null);
  const [filters, setFilters] = useState({
    5: false,
    4: false,
    3: false,
    2: false,
    1: false,
  });
  const [sort, setSort] = useState('relevant');
  const { productID } = useContext(ProductContext);

  function fetchReviews() {
    axios.get('/reviews', {
      params: {
        product_id: productID, sort, page: 1, count: 500,
      },
    })
      .then((result) => result.data.results)
      .then(setReviews);
  }

  useEffect(() => {
    fetchReviews();
  }, [sort]);

  return (
    <div className="rr-container">
      <h2 id="ratings_and_reviews" className="rr-header qa-header">RATINGS & REVIEWS</h2>
      <Breakdown filters={filters} setFilters={setFilters} />
      <ReviewsList
        filters={filters}
        reviews={reviews}
        sort={sort}
        setSort={setSort}
      />
      <AddReviewModal fetchReviews={fetchReviews} />
    </div>
  );
}
