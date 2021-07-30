function findAverageRating(ratingsObj) {
  let totalReviews = 0;
  let sum = 0;
  Object.keys(ratingsObj).forEach((key) => {
    sum += (+(key) * +(ratingsObj[key]));
    totalReviews += +(ratingsObj[key]);
  });
  const rating = sum / totalReviews;
  return rating;
}

export default findAverageRating;
