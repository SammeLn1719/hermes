import React, { Component, useContext, useEffect, useState } from 'react';
import { ButtonGroup, Button } from "@material-tailwind/react";
const Counter = () => {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1)
    }
    function decrement() {
        if(counter > 0){
            setCounter(counter - 1)
        }
    }
    return<ButtonGroup >
    <Button className='bg-slightly-dark-blue text-light-green' onClick={decrement}>-</Button>
    <div className='py-3 px-6 '>{counter}</div>
    <Button className='bg-slightly-dark-blue text-light-green' onClick={increment}>+</Button>
    <Button className='bg-slightly-dark-blue text-light-green'>Купить</Button>
    </ButtonGroup>;
}
export default Counter;