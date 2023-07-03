import React, { useState } from 'react'

//siempre que quiera modificar el estado de una propiedad de un objeto definido en el estado
//debo declarar una funcion aparte que llame al Set del useState y usar el spread operator (...objeto)
// para que la funcion llame al Set, y dentro del Set se crea una copia y se exparse las demas propiedades
// y de esa forma se puede alterar solo una propiedad del objeto del estado

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const setCounter1 = () => {
        setCounter({...counter, counter1: counter.counter1 + 1})
    }


  return (
    <>
    <h1>Counter: {counter.counter1}</h1>
    <h1>Counter: {counter.counter2}</h1>
    <h1>Counter: {counter.counter3}</h1>

    <hr />

    <button className='btn' onClick={setCounter1}>+1</button>
    
    </>
    
  )
}
