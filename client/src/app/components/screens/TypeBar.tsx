
import { observer } from 'mobx-react-lite';
import { FC, useContext, useEffect } from 'react';
import { Context } from './../../../index'

const TypeBar = observer(() => {
    const {store} =  useContext(Context)

    return <ul >
                {store._types.map((store:any) =>
                    <li className="w-40 p-3 mr-6 mb-3 border" >
                        {store.name}
                    </li>
                    )}
        </ul> 
})

export default TypeBar;