import React, { FC, useContext, useEffect } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';


import TypeBar from "../screens/TypeBar";
import BrandBar from "../screens/BrandBar";
import ProductList from "../screens/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { fetchBrands, fetchProduct, fetchTypes } from "../../../http/productAPI.js";

const Catalog: FC = observer(() => {
    const {store} = useContext(Context) 
     useEffect(()=>{
         fetchTypes().then(data => store.setTypes(data))
         fetchBrands().then(data => store.setBrands(data))
         fetchProduct().then(data => store.setProducts(data.rows))
     }, [])

    return<div className={styleCatalog.wrapperFaceCatalog}>
            <div className={styleCatalog.TypeBar}><TypeBar/></div>
            {/* <div className={styleCatalog.BrandBar}><BrandBar/></div> */}
            <div className={styleCatalog.ProductList}><ProductList/></div>
        </div>
})

export default Catalog;