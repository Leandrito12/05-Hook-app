import React from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useCounter} from '../../../Hooks/useCounter.js'

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter();
  return (

    <>
    <h1>Counter with Custom Hook: {counter}</h1>
    <hr />

    {/* cuando se envia parametro, acordate que en el onClick se envia el evento, entonces se declara
    la funcion flecha y en la funcion va el parametro */}
    <Button className='btn' onClick={()=>increment(4)}>+1</Button>
    <Button className='btn' onClick={reset}>reset</Button>
    <Button className='btn' onClick={decrement}>-1</Button>

    </>
    
  )
}
