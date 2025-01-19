import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './ProductsSlider.scss';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from '../../types/Product';
import { ArrowIcon } from '../ArrowIcon';

type Props = {
  products: Product[];
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  }, [products]);

  return (
    <section className="sliderProducts__wrapper">
      <div className="sliderProducts__title">
        <h2 className="sliderProducts__title-content">{title}</h2>
        <div className="sliderProducts-buttons-wrapper">
          <button
            className={`prevButton ${isBeginning ? 'disabled' : ''}`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowIcon color={isBeginning ? 'grey' : 'black'} />
          </button>
          <button
            className={`nextButton ${isEnd ? 'disabled' : ''}`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowIcon
              color={isEnd ? 'grey' : 'black'}
              rotate="180deg"
            />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.5}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        navigation={{
          prevEl: '.prevButton',
          nextEl: '.nextButton',
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
            className="swiper-slide-productcard"
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

// export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
//   const swiperRef = useRef<SwiperClass | null>(null);

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <section className="sliderProducts__wrapper">
//       <div className="sliderProducts__title">
//         <h2 className="sliderProducts__title-content">{title}</h2>
//         <div className="sliderProducts-buttons-wrapper">
//           <button
//             className={`prevButton ${isBeginning ? 'disabled' : ''}`}
//             onClick={() => swiperRef.current?.slidePrev()}
//             disabled={isBeginning}
//           >
//             <ArrowIcon color={isBeginning ? 'grey' : 'black'} />
//           </button>
//           <button
//             className={`nextButton ${isEnd ? 'disabled' : ''}`}
//             onClick={() => swiperRef.current?.slideNext()}
//             disabled={isEnd}
//           >
//             <ArrowIcon
//               color={isEnd ? 'grey' : 'black'}
//               rotate="180deg"
//             />
//           </button>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={16}
//         slidesPerView={1.5}
//         onInit={(swiper) => {
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         onSlideChange={(swiper) => {
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         navigation={{
//           prevEl: '.prevButton',
//           nextEl: '.nextButton',
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2.5,
//             spaceBetween: 16,
//           },
//           1200: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//           },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide
//             key={product.id}
//             className="swiper-slide-productcard"
//           >
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

{
  /* <Swiper
modules={[Navigation]}
spaceBetween={16}
slidesPerView={1.5}
onSwiper={(swiper) => {
  swiperRef.current = swiper;
  setIsBeginning(swiper.isBeginning);
  setIsEnd(swiper.isEnd);
}}
onSlideChange={(swiper) => {
  setIsBeginning(swiper.isBeginning);
  setIsEnd(swiper.isEnd);
}}
navigation={{
  prevEl: '.prevButton',
  nextEl: '.nextButton',
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
// export const ProductsSlider: React.FC<Props> = ({ products, title }) => { */
}
//   const swiperRef = useRef<SwiperClass | null>(null);

//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <section className="sliderProducts__wrapper">
//       <div className="sliderProducts__title">
//         <h2 className="sliderProducts__title-content">{title}</h2>
//         <div className="sliderProducts-buttons-wrapper">
//           <button
//             className={`prevButton ${isBeginning ? 'disabled' : ''}`}
//             onClick={() => swiperRef.current?.slidePrev()}
//             disabled={isBeginning}
//           >
//             <ArrowIcon color={isBeginning ? 'grey' : 'black'} />
//           </button>
//           <button
//             className={`nextButton ${isEnd ? 'disabled' : ''}`}
//             onClick={() => swiperRef.current?.slideNext()}
//             disabled={isEnd}
//           >
//             <ArrowIcon
//               color={isEnd ? 'grey' : 'black'}
//               rotate="180deg"
//             />
//           </button>
//         </div>
//       </div>

//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={16}
//         slidesPerView={1.5}
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper;
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         onSlideChange={(swiper) => {
//           setIsBeginning(swiper.isBeginning);
//           setIsEnd(swiper.isEnd);
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2.5,
//             spaceBetween: 16,
//           },
//           1200: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//           },
//         }}
//       >
//         {products.map((product) => (
//           <SwiperSlide
//             key={product.id}
//             className="ProductWrapper"
//           >
//             <ProductCard product={product} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// return (
//   <section className="sliderProducts__wrapper">
//     <div className="sliderProducts__title">
//       <h2 className="sliderProducts__title-content">{title}</h2>
//       <div className="swiper-buttons-wrapper">
//         <button className="swiper-button-prev"></button>
//         <button className="swiper-button-next"></button>
//       </div>
//     </div>

//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={16}
//       slidesPerView={1.5}
//       navigation={{
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       }}
//       breakpoints={{
//         640: {
//           slidesPerView: 2.5,
//           spaceBetween: 16,
//         },
//         1200: {
//           slidesPerView: 4,
//           spaceBetween: 16,
//         },
//       }}
//     >
//       {products.map((product) => (
//         <SwiperSlide
//           key={product.id}
//           className="ProductWrapper"
//         >
//           <ProductCard
//             product={product}
//             isSlider={true}
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   </section>
// );
// };
