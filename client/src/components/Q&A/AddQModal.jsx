import React, { useContext } from 'react';
import axios from 'axios';
import ProductContext from '../../context';

export default function AddQModal() {
  const {
    showAddQuestionModal,
    setShowAddQuestionModal,
    product,
    productID,
  } = useContext(ProductContext);

  function handleSubmit(event) {
    event.preventDefault();

    const newQuestion = {
      product_id: productID,
      name: event.target[0].value,
      email: event.target[1].value,
      body: event.target[2].value,
    };
    axios
      .post('/qa/questions', newQuestion)
      .then(console.log)
      .catch((err) => console.log(err));
  }

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: showAddQuestionModal ? 'translate(0, 20vh)' : 'translateY(-100vh)',
        opacity: showAddQuestionModal ? '1' : '0',
        zIndex: showAddQuestionModal ? '1' : '-1',
        position: 'absolute',
      }}
    >
      <div className="modal-header">
        <b><h2>Ask Your Question</h2></b>
        <em><h3>[{product.name}]</h3></em>
        <span
          onClick={() => setShowAddQuestionModal(false)}
          className="close-modal-btn"
        ><b>X</b>
        </span>
      </div>
      <div className="modal-content">
        <form
          className="modal-body"
          onSubmit={handleSubmit}
        >
          <div className="modal-top-info">
            <h3>Nickname</h3>
            <h3>Email</h3>
          </div>
          <div className="modal-nickname-email">
            <input
              type="text"
              placeholder="Example: jackson11!"
            />
            <input
              type="text"
              placeholder="aperson@gmail.com"
            />
          </div>
          <div className="modal-info">
            <span>For privacy reasons, do not use your full name or email address</span>
            <span>For authentication reasons, you will not be emailed</span>
          </div>
          <textarea
            className="modal-input"
            placeholder="What would you like to ask about this product?"
          />
          <div className="modal-footer">
            <button
              className="btn-add"
              type="submit"
            >
              <b>Add Question</b>
            </button>
            <button
              className="btn-close"
              onClick={() => setShowAddQuestionModal(false)}
              type="button"
            >
              <b>Close</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
