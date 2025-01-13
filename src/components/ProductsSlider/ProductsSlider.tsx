import './ProductsSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const ProductsSlider: React.FC = () => {
  return (
    <section className="sliderProducts__wrapper">
      <div className="sliderProducts__title">
        <h2>Brand new models</h2>
        <div className="swiper-buttons-wrapper">
          <button className="swiper-button-prev-new-models"></button>
          <button className="swiper-button-next-new-models"></button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={4}
        navigation={{
          nextEl: `.swiper-button-next-new-models`,
          prevEl: `.swiper-button-prev-new-models`,
        }}
      >
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
};
