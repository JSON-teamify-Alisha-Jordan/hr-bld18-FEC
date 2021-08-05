import React from 'react';

export default function ReviewsListButtonRow({ showTwoMoreReviews }) {
  return (
    <div>
      <button onClick={showTwoMoreReviews} type="button">More reviews</button>
      <button type="button">Add a review</button>
    </div>
  );
}
