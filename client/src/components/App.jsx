import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../context';
import Overview from './Overview/Overview';
import QA from './Q&A/QA';
import RR from './R&R/RR';
import Header from './Overview/Header';

export default function App() {
  const [productID, setProductID] = useState('');
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showAddQuestionModal, setShowAddQuestionModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showAddAnswerModal, setShowAddAnswerModal] = useState(false);

  function fetchProductID() {
    axios.get('/products')
      .then((result) => result.data)
      .then((products) => products[4].id)
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
    axios.get('/qa/questions', { params: { product_id: productID, page: 1, count: 50 } })
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

  // if our states are not populated
  if (!productID || !styles.length || !reviews || !Object.keys(product).length
    || !questions.length || !reviewsMeta) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <>
      {showAddQuestionModal ? <div className="modal-backdrop" onClick={() => setShowAddQuestionModal(false)} /> : null}
      {showImageModal ? <div className="modal-backdrop" onClick={() => setShowImageModal(false)} /> : null}
      {showAddAnswerModal ? <div className="modal-backdrop" onClick={() => setShowAddAnswerModal(false)} /> : null}
      <ProductContext.Provider value={{
        fetchReviews,
        fetchStyles,
        fetchQuestions,
        setShowImageModal,
        showImageModal,
        setShowAddAnswerModal,
        showAddAnswerModal,
        setShowAddQuestionModal,
        showAddQuestionModal,
        reviews,
        questions,
        reviewsMeta,
        productID,
        product,
        styles,
      }}
      >
        <Header />
        <Overview />
        <QA />
        <RR />
      </ProductContext.Provider>
    </>
  );
}
