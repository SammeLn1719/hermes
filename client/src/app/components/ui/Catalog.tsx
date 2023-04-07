import React, { FC } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';


import TypeBar from "../screens/TypeBar";
import BrandBar from "../screens/BrandBar";
import ProductList from "../screens/ProductList";

const Catalog: FC = () => {
    

    return<div className={styleCatalog.wrapperFaceCatalog}>
<<<<<<< HEAD
       //     <div className={styleCatalog.TypeBar}><TypeBar/></div>
=======
            <div className={styleCatalog.TypeBar}><TypeBar/></div>
>>>>>>> 632c72b3cc9e165c60c87b136f2bdbd6c417b965
            <div className={styleCatalog.BrandBar}><BrandBar/></div>
            <div className={styleCatalog.ProductList}><ProductList/></div>
        </div>
}

export default Catalog;