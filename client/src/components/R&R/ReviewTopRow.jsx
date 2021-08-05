import React from 'react';
import Stars from '../Stars';
import UserAndDate from './UserAndDate';

export default function ReviewTopRow({ review }) {
  return (
    <div>
      <Stars rating={review.rating} />
      <UserAndDate user={review.reviewer_name} date={review.date} />
    </div>
  );
}
