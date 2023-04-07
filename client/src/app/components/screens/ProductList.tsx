
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from '../../../index'

import style from './../../assets/styles/standard.module.scss'


const ProductList = observer(() => {
    const {store} =  useContext(Context)
   
    
    return <div className={style.BrandBar}>
                {store.products.map((products:any) =>
                
                        <ul key={products.id} >
                            <img width="200px" src={products.img} alt={products.name} />
                            <li>{products.name}</li>
                            <li>{products.price}</li>
                            <li>{products.rating}</li>   
                        </ul>
                        )}
        </div>
})

export default ProductList;