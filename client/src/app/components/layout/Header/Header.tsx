import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiArrowLeft,FiArrowRight } from 'react-icons/fi';
import style from './../Layout.module.scss';

import itemImg from './../../../assets/image/look.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



const Header:React.FunctionComponent = () => {
  return <section>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next-slide",
              prevEl: ".button-prev-slide",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            >
            <SwiperSlide>
              <div className={style.itemSlider}>
                <img src={itemImg}/>

              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.itemSlider}>
                2
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.itemSlider}>
                3
            </div>
            </SwiperSlide>
            <div className="button-next-slide">
              <FiArrowRight/>
            </div>
            <div className="button-prev-slide">
              <FiArrowLeft/>
            </div>
          </Swiper>
    </section>
}

export default Header;