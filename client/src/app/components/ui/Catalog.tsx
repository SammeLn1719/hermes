import React, { FC } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';


import TypeBar from "../screens/TypeBar";
import BrandBar from "../screens/BrandBar";
import ProductList from "../screens/ProductList";

const Catalog: FC = () => {
    

    return<div className={styleCatalog.wrapperFaceCatalog}>
       //     <div className={styleCatalog.TypeBar}><TypeBar/></div>
            <div className={styleCatalog.BrandBar}><BrandBar/></div>
            <div className={styleCatalog.ProductList}><ProductList/></div>
        </div>
}

export default Catalog;