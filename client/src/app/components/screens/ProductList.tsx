
import { log } from 'console';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { $host } from '../../../http';
import { Context } from '../../../index'
import { ProductsResponse } from '../../../types/response/StoreResponse';
import { PRODUCT_ROUTER } from '../../../utils/consts';
<<<<<<< HEAD
=======

import style from './../../assets/styles/standard.module.scss'
import DeviceItem from './ProductItem';
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519


const ProductList = observer(() => {
    
<<<<<<< HEAD
    const store = useContext(Context)
 
    const navigate = useNavigate()
    return <div className="flex flex-wrap"  >
                 {store.store._products.map((store:ProductsResponse) =>
                  <div className="flex mr-6 mb-6 rounded-lg shadow-lg scale-100 w-80 h-80 border flex-col items-center cursor-pointer" key={store.id} onClick={()=> navigate(PRODUCT_ROUTER + '/' + store.id)}>
                    <img className="scale-100 w-40 items-center"  src={store.img} alt={store.name} />
                    <span>{store.info}</span>
                    <span>{store.type}</span>
                    <span>{store.cost} руб</span>
                  </div>
              )}      
=======
    const {store} = useContext(Context)
    console.log(store)
    
 
    const navigate = useNavigate()
    return <div className={style.BrandBar}>
                 {/* {fetchProduct.prototype.forEach((store:any) =>
                    //<DeviceItem key={store.id} store={store}/>
                    <div className={style.BrandBar} onClick={() => navigate(PRODUCT_ROUTER + '/' + store.id)}>
                    <ul key={store.id} >
                            <img width="200px" src={store.img} alt={store.name} />
                            <li>{store.name}</li>
                            <li>{store.price}</li>
                            <li>{store.rating}</li> 
                        </ul>
                     </div> 
                 )}   */}
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
        </div>
})

export default ProductList;