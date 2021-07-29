/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductContext from '../context';
import Overview from './Overview/Overview.jsx';
import QA from './Q&A/QA.jsx';

export default function App() {
  /*
  here we create state for our different catergories of data
  the first value in the arrays is the name of the state
  second value in the arrrays is the function which modifies that state
  useState's argument initializes that state to that type
  */
  const [productID, setProductID] = useState('');
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [questions, setQuestions] = useState([]);

  /*
  here we perform requests to endpoints using axios
  these are asychronous actions and require proper handling
  */
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

  // count is helping to control the amount of reviews recieved
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
    axios.get('/qa/questions', { params: { product_id: productID, page: 1, count: 50 } })
      .then((result) => result.data.results)
      .then(setQuestions);
  }

  // defines the product ID
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

  // if our states are not populated
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
      <QA />
    </ProductContext.Provider>
  );
}
