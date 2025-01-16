import React, { useState } from 'react';
import classNames from 'classnames';
import './PhotosGallery.scss';

type Props = {
  images: string[];
};

export const PhotosGallery: React.FC<Props> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]); // Велике зображення за замовчуванням
  const [bigImageIndex, setBigImageIndex] = useState(0); // Індекс великого зображення

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image); // Змінюємо велике зображення при натисканні на мініатюру
    setBigImageIndex(index); // Задаємо індекс натиснутої мініатюри
  };

  return (
    <div className="photos-gallery">
      <div className="large-image-container">
        <img
          src={selectedImage}
          alt="Large display"
          className="large-image"
        />
      </div>

      <div className="thumbnails-container">
        {images.slice(0, 5).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={classNames('thumbnail', {
              active: index === bigImageIndex,
            })}
            onClick={() => handleThumbnailClick(image, index)}
          />
        ))}
      </div>
    </div>
  );
};
