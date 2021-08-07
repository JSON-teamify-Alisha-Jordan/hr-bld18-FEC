import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function ReviewsListButtonRow({ showTwoMoreReviews }) {
  const { setShowAddReviewModal } = useContext(ProductContext);

  return (
    <div>
      <button onClick={showTwoMoreReviews} type="button">More reviews</button>
      <button onClick={() => { setShowAddReviewModal(true); }} type="button">Add a review</button>
    </div>
  );
}
