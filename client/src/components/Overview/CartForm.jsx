import React, { useState } from 'react';

export default function CartForm({ currentStyle }) {
  const [selectedSku, setSelectedSku] = useState('default');
  const [quantities, setQuantities] = useState([]);

  const skuIds = Object.keys(currentStyle.skus);

  function handleSizeSelection(event) {
    const eventSku = event.target.value;
    setSelectedSku(eventSku);
    const quantityArray = [];
    const maxQuantity = Math.min(currentStyle.skus[eventSku].quantity, 15);
    for (let i = 1; i <= maxQuantity; i += 1) {
      quantityArray.push(i);
    }
    setQuantities(quantityArray);
  }

  return (
    <form>
      <select className="select-size" defaultValue="default" onChange={handleSizeSelection}>
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
      <button className="cart-submit-btn" value="submit" type="submit">Add to Cart</button>
      <i className="fab social fa-twitter fa-2x" />
      <i className="fab social fa-facebook-square fa-2x" />
      <i className="far social fa-heart fa-2x" />
    </form>
  );
}
