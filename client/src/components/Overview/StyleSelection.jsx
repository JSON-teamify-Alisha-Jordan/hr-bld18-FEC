import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function StyleSelection() {
  const { styles } = useContext(ProductContext);
  return (
    <>
      <div>Hi from StyleSelection</div>
      {/* <img src={styles[0].photos[0].url} alt="cool person in camo onsie" /> */}
    </>
  );
}