import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function CartForm() {
  const { styles } = useContext(ProductContext);
  // need to pass the currently selected style id in -- prop drill?
  return (
    <form>
      <select>
        <option selected value="">Select Size</option>
        {/* Need to conditionally render the options based on what is available
        for the chosen style */}
      </select>
    </form>
  );
}
