
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '../../../index'

import style from './../../assets/styles/standard.module.scss'


const BrandBar = observer(() => {
    const {store} =  useContext(Context)
   
    
    return <>
                {/* {store.brands.map((brand:any) =>
                        <div className={style.BrandBarItem}>{brand.name}</div>
                        )} */}
        </>
})

export default BrandBar;