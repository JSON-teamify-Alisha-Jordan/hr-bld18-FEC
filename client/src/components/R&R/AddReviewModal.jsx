import React, { useContext, useState } from 'react';
import ProductContext from '../../context';
import Modal from './Modal';
import StarsInput from './StarsInput';
import RadioRow from './RadioRow';

export default function AddReviewModal() {
  const {
    product,
    reviewsMeta,
    showAddReviewModal,
    setShowAddReviewModal,
  } = useContext(ProductContext);

  const [rating, setRating] = useState(0);
  const characteristicNames = Object.keys(reviewsMeta.characteristics);
  const [chars, setChars] = useState({});
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAddReviewModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <Modal show={showAddReviewModal} close={() => { setShowAddReviewModal(false); }}>
      <form className="rr-add-review-form" onSubmit={handleSubmit}>
        <h3>Write Your Review</h3>
        <h4>About the {product.name}</h4>
        <div className="rr-input-container">
          <p>Overall rating:</p>
          <StarsInput rating={rating} setRating={setRating} />
        </div>
        <div className="rr-input-container">
          <p>Do you recommend this product?</p>
            <label>
              Yes
              <input type="radio" name="recommend" value="true" checked={inputs.recommend === 'true'} onChange={handleInputChange} />
            </label>
            <label>
              No
              <input type="radio" name="recommend" value="false" checked={inputs.recommend === 'false'} onChange={handleInputChange} />
            </label>
        </div>
        <div className="rr-input-container">
          <p>Characteristics</p>
          {characteristicNames.map((characteristic) => (
            <RadioRow
              characteristic={characteristic}
              chars={chars}
              setChars={setChars}
              key={characteristic}
            />
          ))}
        </div>
        <div className="rr-input-container">
          <p>Review summary</p>
          <input
            name="summary"
            type="text"
            placeholder="Example: Best purchase ever!"
            value={inputs.summary || ''}
            onChange={handleInputChange}
            style={{ minWidth: '22rem' }}
            maxLength="60"
          />
        </div>
        <div className="rr-input-container">
          <p>Review body</p>
          <textarea
            name="body"
            placeholder="Why did you like the product or not?"
            value={inputs.body || ''}
            onChange={handleInputChange}
            style={{ minWidth: '22rem', minHeight: '8rem' }}
            maxLength="1000"
          />
        </div>
        <div className="rr-input-container">
          <p>What is your nickname?</p>
          <input
            name="nickname"
            type="text"
            placeholder="Example: jackson11!"
            value={inputs.nickname || ''}
            onChange={handleInputChange}
            style={{ minWidth: '22rem' }}
            maxLength="60"
          />
          <aside style={{ fontSize: '.8rem', fontStyle: 'italic' }}>For privacy reasons, do not use your full name or email address.</aside>
        </div>
        <div className="rr-input-container">
          <p>Your email</p>
          <input
            name="email"
            type="text"
            placeholder="Example: jackson11@email.com"
            value={inputs.email || ''}
            onChange={handleInputChange}
            style={{ minWidth: '22rem' }}
            maxLength="60"
          />
          <aside style={{ fontSize: '.8rem', fontStyle: 'italic' }}>For authentication reasons, you will not be emailed.</aside>
        </div>
        <input className="rr-submit" type="submit" />
      </form>
    </Modal>
  );
}
