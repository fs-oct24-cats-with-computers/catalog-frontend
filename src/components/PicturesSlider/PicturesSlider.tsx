import './PicturesSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerImages = [
  '../../../../public/img/banner-accessories.png',
  '../../../../public/img/banner-phones.png',
  '../../../../public/img/banner-tablets.png',
];

export const PicturesSlider = () => {
  return (
    <section className="BannerContainer">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          type: 'bullets',
          el: '.swiper-pagination',
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide
            className="SwiperSlide"
            key={index}
          >
            <div className="ContentWrapper">
              <div className="TextContent">
                <h2>Now available in our store! 👌</h2>
                <p>Be the first!</p>
                <button>ORDER NOW</button>
              </div>
              <div className="ImgWrapper">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="buttons-wrapper">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
        <button className="swiper-pagination button-pagination"></button>
      </div>
    </section>
  );
};
