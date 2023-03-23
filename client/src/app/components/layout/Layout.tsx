import React, { FC } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import style from './Layout.module.scss';

interface Layout{
  children: string | JSX.Element | JSX.Element[];
}

const Layout:FC<any> = ({children}) => <><Header/>{children}<Footer/></>

export default Layout;