import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductContext from '../context';
import Overview from './Overview/Overview';
import QA from './Q&A/QA';
import RR from './R&R';
import Header from './Overview/Header';

export default function App() {
  const [productID, setProductID] = useState('');
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState(null);
  const [reviewsMeta, setReviewsMeta] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

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

  function fetchReviews() {
    axios.get('/reviews/meta', { params: { product_id: productID } })
      .then((result) => result.data)
      .then((data) => {
        setReviewsMeta(data);
      });
    axios.get('/reviews', {
      params: {
        product_id: productID, sort: 'relevant', page: 1, count: 500,
      },
    })
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
      {show ? <div className="modal-backdrop" onClick={() => setShow(false)} /> : null}
      {showImageModal ? <div className="modal-backdrop" onClick={() => setShowImageModal(false)} /> : null}
      <ProductContext.Provider value={{
        fetchReviews,
        fetchStyles,
        fetchQuestions,
        setShowImageModal,
        showImageModal,
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
        <QA show={show} setShow={setShow} />
        <RR />
      </ProductContext.Provider>
    </>
  );
}
