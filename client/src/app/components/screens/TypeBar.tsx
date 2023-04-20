
import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'

import style from './../../assets/styles/standard.module.scss'
import { createType } from '../../../http/productAPI';
import { log } from 'console';
<<<<<<< HEAD
import { ProductsResponse } from '../../../types/response/StoreResponse';
=======


interface ListItem{
    children: string | JSX.Element | JSX.Element[];
}
const ListItem: FC<any> = observer(({children}) =>{
    return<div className={style.TypeBarItem}>
        {children}
    </div>
})
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519


const TypeBar = observer(() => {
    const {store} =  useContext(Context)
    console.log(store)
<<<<<<< HEAD
    return <ul >
                {store._products.map((store:ProductsResponse) =>
                    <li className="w-40 p-3 mr-6 border" >
                        {store.type}
                    </li>
                    )}
        </ul> 
=======
    return <>
                {/* {store.types.map((type:any) =>
                    <ListItem
                    active={type.id === store.selectedType.id}
                    onClick={() => store.setSelectedType(type)}
                    key={type.id} 
                    > 
                        <div className={style.ListItem}>{type.name} {type.id}</div>
                    </ListItem>
                    )}*/}
        </> 
>>>>>>> 92b07d09da0630f9598375a43ca6b31a60c60519
})

export default TypeBar;