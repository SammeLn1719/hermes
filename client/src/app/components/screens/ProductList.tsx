
import { log } from 'console';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { $host } from '../../../http';
import { Context } from '../../../index'
import { ProductsResponse } from '../../../types/response/StoreResponse';
import { PRODUCT_ROUTER } from '../../../utils/consts';

import style from './../../assets/styles/standard.module.scss'
import DeviceItem from './ProductItem';


const ProductList = () => {
    
    const store = useContext(Context)
    console.log(store)
    

 
    const navigate = useNavigate()
    return <div className={style.BrandBar}>
                 {store.store._products.map((store:ProductsResponse) =>
                <div>{store.id}<div>{store.name}</div>
                <img src={store.img} alt="" />
          </div>
      )}
                 
        </div>
}

export default ProductList;