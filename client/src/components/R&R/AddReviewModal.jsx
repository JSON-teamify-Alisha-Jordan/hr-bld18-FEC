import React, { useContext, useState } from 'react';
import ProductContext from '../../context';
import Modal from './Modal';
import StarsInput from './StarsInput';
import RadioRow from './RadioRow';

export default function AddReviewModal() {
  const { product, reviewsMeta, showAddReviewModal, setShowAddReviewModal } = useContext(ProductContext);

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
        <input type="text" placeholder="Insert your review here..." />
      </form>
    </Modal>
  );
}
