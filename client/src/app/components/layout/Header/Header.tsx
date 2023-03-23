import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './../Layout.module.scss';
import TopBar  from './TopBar';
import itemImg from './../../../assets/image/look.jpg';

import 'swiper/css';




const Header:React.FunctionComponent = () => {
  return<>
    <section>
    <div>
      <TopBar/>
    </div>
      <div>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
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
            ...
          </Swiper>
          </div>
    </section>
  </>
}

export default Header;