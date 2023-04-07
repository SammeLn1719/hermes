
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { Context } from './../../../index'

import style from './../../assets/styles/standard.module.scss'


interface ListItem{
    children: string | JSX.Element | JSX.Element[];
}
const ListItem: FC<any> = observer(({children}) =>{
    return<div className={style.TypeBarItem}>
        {children}
    </div>
})


const TypeBar = observer(() => {
    const {store} =  useContext(Context)
    console.log(store.selectedType.id)
    
    return <>
                {store.types.map((type:any) =>
                    <ListItem
                    active={type.id === store.selectedType.id}
                    onClick={() => store.setSelectedType(type)}
                    key={type.id} 
                    > 
                        <div className={style.ListItem}>{type.name} {type.id}</div>
                    </ListItem>
                    )}
        </>
})

export default TypeBar;