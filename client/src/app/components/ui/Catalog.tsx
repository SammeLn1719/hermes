import React, { FC } from "react";
import  styleCatalog  from './../../assets/styles/standard.module.scss';
import Ashwagandha from './../../assets/image/adaptogen-100x100.webp'
import { Link } from "react-router-dom";

const Catalog: FC = () => {
    

    return<>
        <div className={styleCatalog.wrapperFaceCatalog}>
            <div className={styleCatalog.ProductType}>
                
                    <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                
                    <h3>Ашвагандха (Ashwagandha)</h3>
            
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
            <div className={styleCatalog.ProductType}>
                <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                <div>
                    <h3>Аминокислоты</h3>
                </div>
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
            <div className={styleCatalog.ProductType}>
                <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                <div>
                    <h3>Протеин</h3>
                </div>
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
            <div className={styleCatalog.ProductType}>
                <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                <div>
                    <h3>Гейнеры</h3>
                </div>
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
            <div className={styleCatalog.ProductType}>
                <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                <div>
                    <h3>Изотоники</h3>
                </div>
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
            <div className={styleCatalog.ProductType}>
                <Link to="/"><div className={styleCatalog.itemIMG}><img src={Ashwagandha} alt="ProductType" /></div></Link>
                <div>
                    <h3>Креатин</h3>
                </div>
                <button className={styleCatalog.buttonCatalog}>Перейти</button>
            </div>
        </div>
    </>
}

export default Catalog;