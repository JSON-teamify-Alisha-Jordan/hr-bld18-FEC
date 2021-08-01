import React from 'react';
import RatingSummary from './RatingSummary';
import RecommendationSummary from './RecommendationSummary';
import RatingBreakdown from './RatingBreakdown';
import ProductBreakdown from './ProductBreakdown';

export default function Breakdown() {
  return (
    <div>
      <RatingSummary />
      <RecommendationSummary percent={100} />
      <RatingBreakdown />
      <ProductBreakdown />
    </div>
  );
}
