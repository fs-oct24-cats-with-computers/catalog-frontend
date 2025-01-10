import './Banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerImages = [
  '../../../../public/img/banner-accessories.png',
  '../../../../public/img/banner-phones.png',
  '../../../../public/img/banner-tablets.png',
];

export const Banner = () => {
  return (
    <div className="BannerContainer">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
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
