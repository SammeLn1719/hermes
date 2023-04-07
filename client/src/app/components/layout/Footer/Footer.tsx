import React, { Component } from 'react';
import f from './../../../assets/image/f.png'
import i from './../../../assets/image/i.png'
import v from './../../../assets/image/v.png'

import style from './../Layout.module.scss';



const Footer:React.FunctionComponent = () => {
  return<>
      <section className={style.wrapperFooter}>
        <div className={style.FooterItem}>
          <p>Контакты:</p>
          <div className={style.FooterItemBot}>
            <div>+375(29)737-66-00</div>
            <div>+375(29)737-66-00</div>
          </div>
        </div>
        <div className={style.FooterItem}>
          <p>Адреса:</p>
          <div className={style.FooterItemBot}>
              Россия, Санкт-Петербург, Ленинский просп., 151, офис 711
          </div>
        </div>
        <div className={style.FooterItem}>
          <div className={style.FooterItemBot}>
            <a href=""><img src={f} alt="" /></a>
            <a href=""><img src={i} alt="" /></a>
            <a href=""><img src={v} alt="" /></a>
          </div>
        </div>
      </section>
  </>
}

export default Footer;