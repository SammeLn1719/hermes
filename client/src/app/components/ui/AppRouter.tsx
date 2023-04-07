import React, { FC, useContext } from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import { authRouts, publicRouts } from '../../../routs';
import Layout from '../layout/Layout';

import style from './../../assets/styles/standard.module.scss'
import { Context } from './../../../index';

const AppRouter = () => {
    const {user} = useContext(Context)


    console.log(user)
    return <Layout>
        <section className={style.Main}>
            <Routes>
                {user.isAuth && authRouts.map(({path, Component: Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )}
                {publicRouts.map(({path, Component: Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )}
            </Routes>
        </section>
    </Layout>;    
}

export default AppRouter;