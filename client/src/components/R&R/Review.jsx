import React from 'react';
import ReviewTopRow from './ReviewTopRow';
import ReviewBody from './ReviewBody';
import ReviewFeedback from './ReviewFeedback';

export default function Review() {
  return (
    <div>
      <ReviewTopRow />
      <ReviewBody />
      <ReviewFeedback />
    </div>
  );
}
