import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function FeaturesContainer() {
  const { product } = useContext(ProductContext);
  return (
    <div>
      <span>
        <h3>{product.slogan}</h3>
        <p>{product.description}</p>
      </span>
      <ul>
        {product.features.map((feature) => (
          <li key={feature.feature}>
            {feature.feature}: {feature.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
