import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function FeaturesContainer() {
  const { currentProduct } = useContext(ProductContext);
  return (
    <div>
      <span>
        <h3>{currentProduct.slogan}</h3>
        <p>{currentProduct.description}</p>
      </span>
      <ul>
        {currentProduct.features.map((feature) => (
          <li key={feature.feature}>
            {feature.feature}: {feature.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
