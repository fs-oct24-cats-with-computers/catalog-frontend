import './ProductsSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types/Product';

type Props = {
  products: Product[];
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  // export const ProductsSlider: React.FC = () => {
  return (
    <section className="sliderProducts__wrapper">
      <div className="sliderProducts__title">
        <h2 className="sliderProducts__title-content">{title}</h2>
        <div className="swiper-buttons-wrapper">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.5}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.5,
            spaceBetween: 16,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="ProductWrapper"
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
