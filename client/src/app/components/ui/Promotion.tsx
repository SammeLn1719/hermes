import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './../../assets/styles/standard.module.scss';
import itemImg from './../../assets/image/look.jpg';

import 'swiper/css';




const Promotion:React.FunctionComponent = () => {
  return<>
    <section>
      <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            >
            <SwiperSlide>
              <div className={style.PromotionItemSlider}>
                <img src={itemImg}/>
                
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.PromotionItemSlider}>
                2
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.PromotionItemSlider}>
                3
            </div>
            </SwiperSlide>
            ...
          </Swiper>
          </div>
    </section>
  </>
}

export default Promotion;