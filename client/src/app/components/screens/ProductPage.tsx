import React, { Component, useContext, useEffect, useState } from 'react';
import { Context } from '../../..';
import {fetchOneProduct, fetchСharacteristics} from './../../../http/productAPI' 
import { useParams } from 'react-router-dom';
import { characteristicsResponse, ProductsResponse } from '../../../types/response/StoreResponse';
import { observer } from 'mobx-react-lite';
const ProductPage = () => {
    const [product, setProduct] = useState<Array<ProductsResponse>>()
    const [characteristics, setСharacteristics] = useState<Array<characteristicsResponse>>()
    const {id} = useParams()
    console.log(characteristics)
    useEffect(() => {
            fetchOneProduct(id).then(data => setProduct(data))
            fetchСharacteristics(id).then(data => setСharacteristics(data))
    }, [])
    return <div className="flex mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div>{product?.map((prod:any)=>
                        <div className="flex ">
                            <div className="flex w-96 h-96 justify-center items-center border rounded-lg"><img className="max-w-64 max-h-64" src={prod.img} alt={prod.name} /></div>
                            
                            <div className="flex w-96 h-96  items-center border rounded-lg">
                                
                                <div className='w-full'>
                                <p className='text-2xl pl-5'>Состав:</p>
                                    {characteristics?.map((compounds:any)=>
                                    <div className='flex w-full'><p className='w-1/2 pl-5'>{compounds.name}:</p><p className='w-1/2 pl-5'>{compounds.quantity} {compounds.dimension}</p> </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex w-96 h-96 justify-center items-center border rounded-lg">
                                <span className="text-2xl">Цена: {prod.cost} руб</span>
                                <button className="rounded-full bg-blue-800 px-3 py-1 text-white">Купить</button>
                            </div>
                        </div>     
                    )}</div>
                    
    </div>;
}

export default ProductPage;