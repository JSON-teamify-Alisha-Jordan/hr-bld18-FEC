/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductContext from './context';
import Overview from './components/Overview/Overview.jsx';

export default function App() {
  /* For products may want to just grab a list of IDs, to store in state,
  other GET requests return the same info and additional necessary info  */
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    axios.get('/products').then((result) => result.data).then(setProducts);
  }

  useEffect(() => {
    fetchProducts();
  }, []);
  if (products.length === 0) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <ProductContext.Provider value={{
      products,
    }}
    >
      <Overview products={products} />
    </ProductContext.Provider>
  );
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
