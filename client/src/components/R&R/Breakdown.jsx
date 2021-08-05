/* eslint-disable guard-for-in */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import RatingSummary from './RatingSummary';
import RecommendationSummary from './RecommendationSummary';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

const calculateNumReviews = (ratingsObj) => {
  let numReviews = 0;
  for (const starValue in ratingsObj) {
    numReviews += +ratingsObj[starValue];
  }
  return numReviews;
};

const calculateAverage = (ratingsObj) => {
  const numReviews = calculateNumReviews(ratingsObj);
  let total = 0;
  for (const starValue in ratingsObj) {
    total += (+starValue * +ratingsObj[starValue]);
  }
  return total / numReviews;
};

const calculatePercentRecommended = (recommendedObj) => {
  const numReviews = +recommendedObj.true + +recommendedObj.false;
  const percent = (recommendedObj.true / numReviews) * 100;
  return Math.round(percent);
};

export default function Breakdown({ filters, setFilters }) {
  const { reviewsMeta } = useContext(ProductContext);
  const numReviews = calculateNumReviews(reviewsMeta.ratings);
  const averageRating = calculateAverage(reviewsMeta.ratings);
  const percentRecommended = calculatePercentRecommended(reviewsMeta.recommended);
  console.log(reviewsMeta);
  return (
    <div>
      <RatingSummary rating={averageRating} />
      <RecommendationSummary percent={percentRecommended} />
      <RatingBreakdown
        ratings={{ ...reviewsMeta.ratings, numReviews }}
        filters={filters}
        setFilters={setFilters}
      />
      <ProductBreakdown characteristics={reviewsMeta.characteristics} />
    </div>
  );
}
