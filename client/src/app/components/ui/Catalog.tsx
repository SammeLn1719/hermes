import React, { FC, useContext, useEffect } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';


import TypeBar from "../screens/TypeBar";
import BrandBar from "../screens/BrandBar";
import ProductList from "../screens/ProductList";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import { fetchBrands, fetchProduct, fetchTypes } from "../../../http/productAPI";

const Catalog: FC = observer(() => {
    const {product} = useContext(Context) 
    useEffect(()=>{
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
        fetchProduct().then(data => product.setProducts(data.rows))

    }, [])

    return<div className={styleCatalog.wrapperFaceCatalog}>
       //     <div className={styleCatalog.TypeBar}><TypeBar/></div>
            <div className={styleCatalog.BrandBar}><BrandBar/></div>
            <div className={styleCatalog.ProductList}><ProductList/></div>
        </div>
})

export default Catalog;