import React from 'react';

export default function Stars({ rating }) {
  const roundedRating = (Math.round(rating * 4) / 4).toFixed(2);
  const wholeNums = roundedRating.slice(0, 1);
  const decimalNum = roundedRating.slice(2);
  const starFillArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < wholeNums; i++) {
    starFillArray[i] = 100;
  }
  starFillArray[starFillArray.indexOf(0)] = decimalNum;

  return (
    <div>
      {starFillArray.map((value) => (<i className={`star star${value} fas fa-star`} />))}
    </div>
  );
}
