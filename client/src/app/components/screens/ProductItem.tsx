import React, { Component, useContext } from 'react';
import style from './../../assets/styles/standard.module.scss'

const ProductItem = (store:any) => {
    console.log(store)
    return <div className={style.BrandBar}>
            <ul key={store.id} >
                            <img width="200px" src={store.img} alt={store.name} />
                            <li>{store.name}</li>
                            <li>{store.price}</li>
                            <li>{store.rating}</li> 
                        </ul>
                </div>
}

export default ProductItem;