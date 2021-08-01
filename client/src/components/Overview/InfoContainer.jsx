import React, { useContext } from 'react';
import ProductContext from '../../context';
import Stars from '../Stars';
import ProductDetails from './ProductDetails';
import StyleSelection from './StyleSelection';
import findAverageRating from '../../helperFunctions';

export default function InfoContainer({ currentStyle, changeSelectedStyle }) {
  const { reviewsMeta } = useContext(ProductContext);
  const rating = findAverageRating(reviewsMeta.ratings);
  const totalReviews = +(reviewsMeta.recommended.false) + +(reviewsMeta.recommended.true);

  return (
    <div className="info-container">
      {totalReviews === 0
        ? null
        : (
          <div>
            <Stars rating={rating} />
            <a className="reviews-link" href="#ratings_and_reviews">Read all {totalReviews} reviews</a>
          </div>
        )}
      <ProductDetails currentStyle={currentStyle} />
      <StyleSelection currentStyle={currentStyle} changeSelectedStyle={changeSelectedStyle} />
    </div>
  );
}
