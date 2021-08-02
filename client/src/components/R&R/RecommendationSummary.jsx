import React from 'react';

export default function RecommendationSummary({percent}) {
  return (
    <div className="rr-recommendation-summary">
      <p>{`${percent}% of reviews recommend this product.`}</p>
    </div>
  );
}
