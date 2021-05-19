import { useState } from 'react'

export const useCounter = (initialState = 10) => {
    
    const [counter, setCounter] = useState(initialState);

    //Si quieremos enviar por argumento 
    const increment = () => {
        setCounter(counter + 1);
    }   

    
    const decrement = () => {
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialState); 
    }
    //Regresamos un arreglo 
    return {
        counter,
        increment,
        decrement,
        reset
    };
}
