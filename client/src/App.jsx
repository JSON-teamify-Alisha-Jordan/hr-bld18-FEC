/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductContext from './context';
import Overview from './components/Overview/Overview.jsx';

export default function App() {
  const [productID, setProductID] = useState('');
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [questions, setQuestions] = useState([]);

  function fetchProductID() {
    axios.get('/products')
      .then((result) => result.data)
      .then((products) => products[0].id)
      .then(setProductID);
  }

  function fetchProduct() {
    axios.get(`/products/${productID}`)
      .then((result) => result.data)
      .then(setProduct);
  }

  function fetchStyles() {
    axios.get(`/products/${productID}/styles`)
      .then((result) => result.data.results)
      .then(setStyles);
  }

  function fetchReviews(count = 2) {
    axios.get('/reviews/meta', { params: { product_id: productID } })
      .then((result) => result.data)
      .then((data) => {
        setReviewsMeta(data);
      });
    axios.get('/reviews', { params: { product_id: productID, sort: 'relevant', count } })
      .then((result) => result.data.results)
      .then(setReviews);
  }

  function fetchQuestions() {
    axios.get('/qa/questions', { params: { product_id: productID } })
      .then((result) => result.data.results)
      .then(setQuestions);
  }

  useEffect(() => {
    fetchProductID();
  }, []);

  useEffect(() => {
    if (productID) {
      fetchProduct();
      fetchStyles();
      fetchReviews();
      fetchQuestions();
    }
  }, [productID]);

  if (!productID || !styles.length || !reviews || !Object.keys(product).length
      || !questions.length) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ProductContext.Provider value={{
      fetchReviews,
      fetchStyles,
      fetchQuestions,

      reviews,
      questions,
      reviewsMeta,
      productID,
      product,
      styles,
    }}
    >
      <Overview />
    </ProductContext.Provider>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
