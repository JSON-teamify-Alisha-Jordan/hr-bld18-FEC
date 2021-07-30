/* eslint-disable guard-for-in */
/* eslint-disable import/extensions */
/* eslint-disable no-restricted-syntax */
import React, { useContext } from 'react';
import ProductContext from '../../context';
import Stars from '../Stars.jsx';
import ProductDetails from './ProductDetails.jsx';
import StyleSelection from './StyleSelection.jsx';
import findAverageRating from '../../helperFunctions.js';

export default function InfoContainer({ currentStyle, changeSelectedStyle }) {
  const { reviewsMeta } = useContext(ProductContext);
  const rating = findAverageRating(reviewsMeta.ratings);
  const totalReviews = +(reviewsMeta.recommended.false) + +(reviewsMeta.recommended.true);

  return (
    <div className="info-container">
      <div>
        <Stars rating={rating} />
        <a className="reviews-link" href="#reviews_anchor_name">Read all {totalReviews} reviews</a>
      </div>
      <ProductDetails />
      <StyleSelection currentStyle={currentStyle} changeSelectedStyle={changeSelectedStyle} />
    </div>
  );
}
