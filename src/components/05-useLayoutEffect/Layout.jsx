import {useCounter, useFetch} from '../../Hooks/index.js'
import { TitleAndLoading } from '../TitleAndLoading/TitleAndLoading.jsx'
import {BLockQuoteLoaded} from '../BlockQuoteLoaded/BLockQuoteLoaded.jsx'
import {Button} from '../Button/Button.jsx'
import { useLayoutEffect, useRef, useState } from 'react'

export const Layout = () => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width:0, height:0})
  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect()
    setBoxSize({height, width})
  }, [Layout])


    const {counter, increment } = useCounter(1)
    const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
    
    
  return (
    <>
        
        {
            isLoading ? (<TitleAndLoading/>):(<>
            <BLockQuoteLoaded image={data?.image} name={data?.name} pRef={pRef}/>
            <Button action={increment} text={"next character"}/>
            </>    
            )
        }

        <code>{JSON.stringify(boxSize)}</code>

        
    </>
  )
}
