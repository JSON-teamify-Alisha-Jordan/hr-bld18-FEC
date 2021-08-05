/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function CartForm({ currentStyle }) {
  const [selectedSku, setSelectedSku] = useState('default');
  const [quantities, setQuantities] = useState([]);
  const [validCart, setValidCart] = useState(null);
  const selectRef = useRef(null);

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

  function handleInvalidCart() {
    setValidCart(false);
    selectRef.current.focus();
  }

  function handleAddToCart(event) {
    event.preventDefault();
    (validCart)
      ? axios.post('/cart', { sku_id: selectedSku }).then(setValidCart(null))
      : handleInvalidCart();
  }

  return (
    <>
      {validCart === false
        ? <span data-testid="selectSize" className="please-select-size">*Please select a size</span>
        : null}
      <form>
        <select ref={selectRef} className="select-size" defaultValue="default" onChange={handleSizeSelection}>
          <option value="default">Select Size</option>
          {skuIds.map((sku) => <option key={sku} value={sku}>{currentStyle.skus[sku].size}</option>)}
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
        <button onClick={handleAddToCart} data-testid="cartButton" className="cart-submit-btn" value="submit" type="submit">Add to Cart</button>
        <i className="fab social fa-twitter fa-2x" />
        <i className="fab social fa-facebook-square fa-2x" />
        <i className="far social fa-heart fa-2x" />
      </form>
    </>
  );
}
