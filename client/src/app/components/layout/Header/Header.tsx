import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './../Layout.module.scss';
import TopBar  from './TopBar';
import itemImg from './../../../assets/image/look.jpg';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';



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
            navigation={true}
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
            ...
          </Swiper>
          </div>
    </section>
  </>
}

export default Header;