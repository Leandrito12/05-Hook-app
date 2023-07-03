import React from 'react'
import { useCounter } from '../../Hooks'
import { ShowIncrement } from '../ShowIncrement/ShowIncrement'

export const CallBackHook = () => {
    
        const {counter, increment} = useCounter(0)

       return (
         <>
             <h1>useCallback Hook: <small>{counter}</small></h1>
         <hr />
         <ShowIncrement increment={increment}/>
         </>
         
     
       )

}
