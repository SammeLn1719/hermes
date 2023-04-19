
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


const ProductList = observer(() => {
    
    const {store} = useContext(Context)
    console.log(store)
    
 
    const navigate = useNavigate()
    return <div className={style.BrandBar}>
                 {store.map((store:any) =>
                    //<DeviceItem key={store.id} store={store}/>
                    <div className={style.BrandBar} onClick={() => navigate(PRODUCT_ROUTER + '/' + store.id)}>
                    <ul key={store.id} >
                            <img width="200px" src={store.img} alt={store.name} />
                            <li>{store.name}</li>
                            <li>{store.price}</li>
                            <li>{store.rating}</li> 
                        </ul>
                     </div> 
                 )}   
        </div>
})

export default ProductList;