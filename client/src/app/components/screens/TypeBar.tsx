
import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'

import style from './../../assets/styles/standard.module.scss'
import { createType } from '../../../http/productAPI';
import { log } from 'console';
import { ProductsResponse } from '../../../types/response/StoreResponse';


const TypeBar = observer(() => {
    const {store} =  useContext(Context)
    console.log(store)
    return <ul >
                {store._products.map((store:ProductsResponse) =>
                    <li className="w-40 p-3 mr-6 border" >
                        {store.type}
                    </li>
                    )}
        </ul> 
})

export default TypeBar;