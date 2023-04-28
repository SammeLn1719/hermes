import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'


const TabCatalog = observer(() => {
    const {store} =  useContext(Context)
    return <div className="flex justify-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                {store._types.map((store:any) =>
                    <div className="w-52 p-3 mr-6 mb-3 border rounded-lg cursor-pointer" >
                        
                        <img src={store.img} alt={store.name} />
                        {store.name}
                    </div>
                )}

                
        </div> 
})

export default TabCatalog;