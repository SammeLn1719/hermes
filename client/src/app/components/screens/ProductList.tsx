
import { log } from 'console';
import { observer } from 'mobx-react-lite';
import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../index'
import { ProductsResponse } from '../../../types/response/StoreResponse';
import { PRODUCT_ROUTER } from '../../../utils/consts';


const ProductList = observer(() => {
    
    const store = useContext(Context)
 
    const navigate = useNavigate()
    return <div className="flex flex-wrap"  >
                 {store.store._products.map((store:ProductsResponse) =>
                  <div className="flex mr-6 mb-6 rounded-lg shadow-lg scale-100 w-80 h-80 border flex-col items-center cursor-pointer" key={store.id} onClick={()=> navigate(PRODUCT_ROUTER + '/' + store.id)}>
                    <img className="scale-100 w-40 items-center"  src={store.img} alt={store.name} />
                    <span>{store.info}</span>
                    <span>{store.type}</span>
                    <span>{store.cost} руб</span>
                  </div>
              )}      
        </div>
})

export default ProductList;