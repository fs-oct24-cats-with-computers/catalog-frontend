import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

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
      <motion.div
        className="sliderProducts__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="sliderProducts__title-content">{title}</h2>
        <div className="sliderProducts-buttons-wrapper">
          <button
            className={`prevButton ${isBeginning ? 'disabled' : ''}`}
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          >
            <ArrowIcon color={isBeginning ? 'lightgrey' : 'black'} />
          </button>
          <button
            className={`nextButton ${isEnd ? 'disabled' : ''}`}
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          >
            <ArrowIcon
              color={isEnd ? 'lightgrey' : 'black'}
              rotate="180deg"
            />
          </button>
        </div>
      </motion.div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.5}
        slidesPerGroup={1}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard product={product} />
            </motion.div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
