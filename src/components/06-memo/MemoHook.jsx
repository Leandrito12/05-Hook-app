import React, { useMemo, useState } from 'react'
import { useCounter } from '../../Hooks'

const heavyStuff = (iterationNumber = 100) => {
  for (let index = 0; index < iterationNumber.length; index++) {
   console.log("imprimite perro")
  }
  return `${iterationNumber} iteraciones realizadas`
}


export const MemoHook = () => {
   const {counter, increment} = useCounter(0)
   const [show, setShow] = useState(true)
   const memorizedValue = useMemo(()=>heavyStuff(counter), [counter])
  return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
    <hr />
    <h4>{memorizedValue}</h4>
    <button className='btn btn-primary' onClick={increment}>+1</button>
    <button className='btn btn-primary' onClick={()=>setShow(!show)}>Show/Hide{JSON.stringify(show)}</button>
    </>
    

  )
}

