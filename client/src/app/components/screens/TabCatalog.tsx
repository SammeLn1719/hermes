import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'


const TabCatalog = observer(() => {
    const {store} =  useContext(Context)
    return <div>
                {store._types.map((store:any) =>
                    <div className="w-40 p-3 mr-6 mb-3 border" >
                        
                        <img src={store.img} alt={store.name} />
                        {store.img}
                        {store.name}
                    </div>
                )}
        </div> 
})

export default TabCatalog;