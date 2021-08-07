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
  const [recommend, setRecommend] = useState('');
  const characteristicNames = Object.keys(reviewsMeta.characteristics);
  const [chars, setChars] = useState({});

  const handleRecommendChange = (e) => {
    setRecommend(e.target.value);
  };

  return (
    <Modal show={showAddReviewModal} close={() => { setShowAddReviewModal(false); }}>
      <form className="rr-add-review-form">
        <h3>Write Your Review</h3>
        <h4>About the {product.name}</h4>
        <div>
          <p>Overall rating:</p>
          <StarsInput rating={rating} setRating={setRating} />
        </div>
        <fieldset>
          <p>Do you recommend this product?</p>
            <label>
              Yes
              <input type="radio" name="recommend" value="yes" checked={recommend === 'yes'} onChange={handleRecommendChange} />
            </label>
            <label>
              No
              <input type="radio" name="recommend" value="no" checked={recommend === 'no'} onChange={handleRecommendChange} />
            </label>
        </fieldset>
        <fieldset>
          <p>Characteristics</p>
          {characteristicNames.map((characteristic) => (
            <RadioRow
              characteristic={characteristic}
              chars={chars}
              setChars={setChars}
              key={characteristic}
            />
          ))}
        </fieldset>
        <p>Review summary</p>
        <input style={{ minWidth: '22rem' }} type="text" placeholder="Example: Best purchase ever!" maxLength="60" />
        <p>Review body</p>
        <textarea style={{ minWidth: '22rem', minHeight: '8rem' }} placeholder="Why did you like the product or not?" maxLength="1000" />
        <p>What is your nickname?</p>
        <input style={{ minWidth: '22rem' }} type="text" placeholder="Example: jackson11!" maxLength="60" />
        <aside style={{ fontSize: '.8rem', fontStyle: 'italic' }}>For privacy reasons, do not use your full name or email address.</aside>
        <p>Your email</p>
        <input style={{ minWidth: '22rem' }} type="text" placeholder="Example: jackson11@email.com" maxLength="60" />
        <aside style={{ fontSize: '.8rem', fontStyle: 'italic' }}>For authentication reasons, you will not be emailed.</aside>
        <input type="submit" />
      </form>
    </Modal>
  );
}
