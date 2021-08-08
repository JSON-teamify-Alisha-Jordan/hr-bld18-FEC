import React from 'react';

// If time allows, this can use the Stars component (would require some refactoring)
export default function StarsInput({ rating, setRating }) {
  const starFillArray = [0, 0, 0, 0, 0];
  for (let i = 0; i < rating; i++) {
    starFillArray[i] = 100;
  }
  const starMeanings = {
    5: 'Great',
    4: 'Good',
    3: 'Average',
    2: 'Fair',
    1: 'Poor',
  };

  return (
    <div>
      {starFillArray.map((value, index) => (
        <i onClick={() => setRating(index + 1)} key={index} className={`star star${value} star-input fas fa-star`} />))}
      {rating > 0 ? starMeanings[rating] : null}
    </div>
  );
}
