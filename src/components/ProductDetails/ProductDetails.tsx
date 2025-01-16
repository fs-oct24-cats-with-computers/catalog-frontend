import React, { useState } from 'react';
import './ProductDetails.scss';
import { ProductExpand } from '../../types/ProductExpand';
import Favorite from '../../../public/icons/Favourites Filled (Heart Like).svg?react';

type Props = {
  product: ProductExpand;
};

export const ProductDetails: React.FC<Props> = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedCapacity, setSelectedCapacity] = useState(product.capacity);

  return (
    <div className="product-details">
      <div className="product-details__info">
        {/* Вибір кольору */}
        <p className="product-details__color-available">Available colors</p>
        <div className="product-details__color-options">
          {product.colorsAvailable.map((color) => (
            <button
              key={color}
              className={`product-details__color-options-button ${
                selectedColor === color ?
                  'product-details__color-options-button--active'
                : ''
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Вибір об'єму пам'яті */}
        <div className="product-details__capacity-options">
          <p className="product-details__capacity-title">Select capacity:</p>
          <div className="product-details__capacity-list">
            {product.capacityAvailable.map((capacity) => (
              <button
                key={capacity}
                className={`product-details__capacity-button ${
                  selectedCapacity === capacity ?
                    'product-details__capacity-button--active'
                  : ''
                }`}
                onClick={() => setSelectedCapacity(capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>
        </div>

        {/* Ціни */}
        <div className="product-details__pricing">
          <p className="product-details__price-discount">
            ${product.priceDiscount}
          </p>
          <p className="product-details__price-regular">
            ${product.priceRegular}
          </p>
        </div>
        {/* Конпки */}
        <div className="product-details__buttons">
          <div className="product-details__button product-details__button--add">
            Add to cart
          </div>
          <div className="product-details__button product-details__button--favorite">
            <Favorite className="product-details__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
