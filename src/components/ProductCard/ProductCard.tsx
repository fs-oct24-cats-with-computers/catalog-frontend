import React from 'react';
import './ProductCard.scss';
import { Product } from '../../types/Product';
import Favorite from '../../../public/icons/Favourites Filled (Heart Like).svg?react';
import '../../styles/utils/variables.scss';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      {/* Image container */}
      <div className="product-card__image">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__image-img"
        />
      </div>

      {/* Title */}
      <a
        href="#"
        className="product-card__title"
      >
        {product.name}
      </a>

      {/* Prices */}
      <div className="product-card__price">
        <span className="product-card__price-current">${product.price}</span>
        {product.price && (
          <span className="product-card__price-no-discount">
            ${product.price}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="product-card__divider"></div>

      {/* Characteristics */}
      <div className="product-card__characteristics">
        <div className="product-card__characteristic">
          <span className="product-card__characteristic-name">Screen:</span>
          <span className="product-card__characteristic-value">
            {product.screen}
          </span>
        </div>
        <div className="product-card__characteristic">
          <span className="product-card__characteristic-name">Capacity:</span>
          <span className="product-card__characteristic-value">
            {product.capacity}
          </span>
        </div>
        <div className="product-card__characteristic">
          <span className="product-card__characteristic-name">RAM:</span>
          <span className="product-card__characteristic-value">
            {product.ram}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="product-card__buttons">
        <div className="product-card__button product-card__button--add">
          Add to cart
        </div>
        <div className="product-card__button product-card__button--favorite">
          <Favorite className="product-card__icon" />
        </div>
      </div>
    </div>
  );
};
