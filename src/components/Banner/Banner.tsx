import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const bannerImages = [
  '../../../../public/img/banner-accessories.png',
  '../../../../public/img/banner-phones.png',
  '../../../../public/img/banner-tablets.png',
];

export const Banner = () => {
  return (
    <div className="BannerContainer">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide
            key={index}
            className="SwiperSlide"
          >
            <div>
              <img
                className="BannerImg"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
