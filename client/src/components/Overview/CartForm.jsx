/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import axios from 'axios';

export default function CartForm({ currentStyle }) {
  const [selectedSku, setSelectedSku] = useState('default');
  const [quantities, setQuantities] = useState([]);
  const [validCart, setValidCart] = useState(null);

  const skuIds = Object.keys(currentStyle.skus);

  function handleSizeSelection(event) {
    const eventSku = event.target.value;
    setValidCart(true);
    setSelectedSku(eventSku);
    const quantityArray = [];
    const maxQuantity = Math.min(currentStyle.skus[eventSku].quantity, 15);
    if (maxQuantity === 0) {
      quantityArray.push('OUT OF STOCK');
    } else {
      for (let i = 1; i <= maxQuantity; i++) {
        quantityArray.push(i);
      }
    }
    setQuantities(quantityArray);
  }

  function handleAddToCart(event) {
    event.preventDefault();
    validCart === true
      ? axios.post('/cart', { sku_id: selectedSku }).then(setValidCart(null))
      : setValidCart(false)
  }

  return (
    <>
      {validCart === false
        ? <span className="please-select-size">*Please select a size</span>
        : null}
      <form>
        <select className="select-size" defaultValue="default" onChange={handleSizeSelection}>
          <option value="default">Select Size</option>
          {skuIds.map((sku) =>
            <option key={sku} value={sku}>{currentStyle.skus[sku].size}</option>)}
        </select>
        {selectedSku !== 'default'
          ? (
            <select className="select-quantity">
              {quantities.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          )
          : (
            <select className="select-quantity" defaultValue="default">
              <option value="default">-</option>
            </select>
          )}
        <button onClick={handleAddToCart} className="cart-submit-btn" value="submit" type="submit">Add to Cart</button>
        <a className="social-link" href="https://twitter.com/login?lang=en"><i className="fab social fa-twitter fa-2x" /></a>
        <a className="social-link" href="https://www.facebook.com/"><i className="fab social fa-facebook-square fa-2x" /></a>
        <a className="social-link" href="#"><i className="far social fa-heart fa-2x" /></a>
      </form>
    </>
  );
}
