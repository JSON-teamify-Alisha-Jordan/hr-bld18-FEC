import React, { useContext } from 'react';
import ProductContext from '../../context';

export default function FeaturesContainer() {
  const { product } = useContext(ProductContext);
  return (
    <div className="feature-container">
      <span data-testid="description" className="product-description">
        <h2 className="overview-slogan">{product.slogan}</h2>
        <p className="overview-product-description">{product.description}</p>
      </span>
      <ul data-testid="featuresList" className="overview-features-list">
        {product.features.map((feature) => (
          <li key={feature.feature}>
            ✓ {feature.feature}: {feature.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
