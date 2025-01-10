import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import accessories from '../../../../public/img/banner-accessories.png';
import phones from '../../../../public/img/banner-phones.png';
import tablets from '../../../../public/img/banner-tablets.png';


export const Banner = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className='BannerImg' src={accessories} /></SwiperSlide>
      <SwiperSlide><img className='BannerImg' src={phones}/></SwiperSlide>
      <SwiperSlide><img className='BannerImg' src={tablets}/></SwiperSlide>
    </Swiper>
  );
};















// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import { Navigation } from 'swiper/modules';

// import accessories from '../../../api/img/banner-accessories.png';
// import phones from '../../../api/img/banner-phones.png';
// import tablets from '../../../api/img/banner-tablets.png';

// export const Banner = () => {
//   const images = [
//     accessories,
//     phones,
//     tablets,
//   ];

//   return (
//     <Swiper
//       modules={[Navigation]}
//       navigation
//       spaceBetween={50}
//       slidesPerView={1}
//       loop
//     >
//       {images.map((src, index) => (
//         <SwiperSlide key={index}>
//           <img src={src} alt={`Slide ${index + 1}`} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Autoplay,
//   Virtual
// } from "swiper/core";
// import "swiper/swiper-bundle.css";
// import "./styles.css";

// SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

// export default function App() {
//   const slides = [];

//   for (let i = 0; i < 12; i++) {
//     slides.push(
//       <SwiperSlide key={`slide-${i}`} style={{ listStyle: "none" }}>
//         <div className="slide">
//           <h3>{i}</h3>
//         </div>
//       </SwiperSlide>
//     );
//   }

//   return (
//     <Swiper
//       id="swiper"
//       virtual
//       slidesPerView={3}
//       // slidesPerColumn={2}
//       // slidesPerColumnFill="row"
//       spaceBetween={30}
//       // slidesPerGroup={2}
//       // autoplay
//       // loop
//       onReachEnd={() => {
//         console.log("reach end");
//         const tmp = slides.unshift();
//         slides.push(tmp);
//       }}
//       navigation
//       pagination
//     >
//       {slides}
//     </Swiper>
//   );
// }
