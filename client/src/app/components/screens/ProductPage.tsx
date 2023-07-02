import React, { Component, useContext, useEffect, useState } from 'react';

import {fetchOneProduct, fetchСharacteristics} from './../../../http/productAPI' 
import { useParams } from 'react-router-dom';
import { characteristicsResponse, ProductsResponse } from '../../../types/response/StoreResponse';
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { ButtonGroup, Button } from "@material-tailwind/react";
import Counter from '../ui/Counter';

const ProductPage = () => {
    const [product, setProduct] = useState<Array<ProductsResponse>>()
    const [characteristics, setСharacteristics] = useState<Array<characteristicsResponse>>()
    const {id} = useParams()
    console.log(characteristics)
    useEffect(() => {
            fetchOneProduct(id).then(data => setProduct(data))
            fetchСharacteristics(id).then(data => setСharacteristics(data))
    }, [])

    const [counter, setCounter] = useState(1);

    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }
   

    return <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div>{product?.map((prod:any)=>
            <div >
                <div className='flex'>
                    <div className="flex w-2/3 h-96 justify-center items-center border rounded-lg"> 
                    
                    <Carousel
                    className="rounded-xl"
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                        variant="text"
                        size="lg"
                        onClick={handlePrev}
                        className="!absolute top-2/4 -translate-y-2/4 left-4"
                        >
                        <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                        variant="text"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 -translate-y-2/4 !right-4 "
                        >
                        <ArrowRightIcon strokeWidth={2} className="w-6 h-6 " />
                        </IconButton>
                    )}
                    >
                    <img
                        src={prod.img}
                        alt="image 1"
                        className=" mx-auto object-cover"
                    />
                    <img
                        src={prod.img}
                        alt="image 2"
                        className="h-full w-full object-cover"
                    />
                    <img
                        src={prod.img}
                        alt="image 3"
                        className="h-full w-full object-cover"
                    />
                    </Carousel>
                    </div>
                    <div className="p-20">
                        <span className="text-2xl">Цена: {(prod.cost*counter).toFixed(2)} руб</span>
                        <p className='text-light-green italic'>Количество товара: x{counter}</p>
                        <ButtonGroup >
                            <Button className='bg-slightly-dark-blue text-light-green' onClick={decrement}>-</Button>
                            <div className='py-3 px-6 text-2xl'>{counter}</div>
                            <Button className='bg-slightly-dark-blue text-light-green' onClick={increment}>+</Button>
                            <Button className='bg-slightly-dark-blue text-light-green'>Купить</Button>
                        </ButtonGroup>
                    </div>
                </div>
            
                <table className="table-auto">
                    <thead>
                    <tr>
                       Характеристики:
                       <hr />
                    </tr>
                    </thead>
                    
                    {characteristics?.map((compounds:any)=>
                        <tbody>
                            <td>{compounds.name}</td>
                            <td>{compounds.quantity} {compounds.dimension}</td>
                        </tbody>
                    )}
                </table>
                
                <div className='description'>

                </div>
                <div className='reviews'>

                </div>
            </div>     
        )}</div>
                    
    </div>;
}

export default ProductPage;