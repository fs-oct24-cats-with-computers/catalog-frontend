import React from 'react';
import './ProductCard.scss';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      {/* Image container */}
      <div className="product_image">
        <img
          src={product.image}
          alt={product.name}
          className="product_image_img"
        />
      </div>

      {/* Title */}
      <h2 className="product_title">{product.name}</h2>

      {/* Prices */}
      <div className="product_price">
        <span>${product.price}</span>
        {product.price && (
          <span className="product_price_noDisc">${product.price}</span>
        )}
      </div>

      {/* Divider */}
      <div className="product_line"></div>

      {/* Characteristics */}
      <div className="product_characteristic">
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">Screen:</span>
          <span>{product.screen}</span>
        </div>
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">Capacity:</span>
          <span>{product.capacity}</span>
        </div>
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">RAM:</span>
          <span>{product.ram}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="product_buttons">
        <div className="product_buttons_add">Add to cart</div>
        <div className="product_buttons_favorite">
          <img
            src="Buttons/Add to fovourites - Default.svg"
            alt="Favorite"
          />
        </div>
      </div>
    </div>
  );
};
