import React from 'react';

export default function ReviewBody({ review }) {
  return (
    <div className="review-body-container">
      <h4>{review.summary}</h4>
      <p>{review.body}</p>
    </div>
  );
}
