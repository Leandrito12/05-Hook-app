import {useCounter, useFetch} from '../../Hooks/index.js'
import { TitleAndLoading } from '../TitleAndLoading/TitleAndLoading.jsx'
import {BLockQuoteLoaded} from '../BlockQuoteLoaded/BLockQuoteLoaded.jsx'
import {Button} from '../Button/Button.jsx'

export const Layout = () => {
    const {counter, increment } = useCounter(1)
    const {data, isLoading} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
    
    
  return (
    <>
        
        {
            isLoading ? (<TitleAndLoading/>):(<>
            <BLockQuoteLoaded image={data?.image} name={data?.name}/>
            <Button action={increment} text={"next character"}/>
            </>    
            )
        }

        
    </>
  )
}
