import React from 'react';
import './ProductCard.scss';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice?: number | null;
  screen: string;
  capacity: string;
  ram: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  oldPrice,
  screen,
  capacity,
  ram,
}) => {
  return (
    <div className="product">
      {/* Image container */}
      <div className="product_image">
        <img
          src={image}
          alt={name}
          className="product_image_img"
        />
      </div>

      {/* Title */}
      <h2 className="product_title">{name}</h2>

      {/* Prices */}
      <div className="product_price">
        <span>${price}</span>
        {oldPrice && <span className="product_price_noDisc">${oldPrice}</span>}
      </div>

      {/* Divider */}
      <div className="product_line"></div>

      {/* Characteristics */}
      <div className="product_characteristic">
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">Screen:</span>
          <span>{screen}</span>
        </div>
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">Capacity:</span>
          <span>{capacity}</span>
        </div>
        <div className="product_characteristic_detail">
          <span className="product_characteristic_detail_name">RAM:</span>
          <span>{ram}</span>
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
