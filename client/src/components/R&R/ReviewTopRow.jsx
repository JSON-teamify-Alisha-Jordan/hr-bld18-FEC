import React from 'react';
import Stars from '../Stars';
import UserAndDate from './UserAndDate';

export default function ReviewTopRow() {
  return (
    <div>
      <Stars rating={5} />
      <UserAndDate />
    </div>
  );
}
