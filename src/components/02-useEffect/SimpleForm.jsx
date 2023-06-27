import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'johndoee',
        email: 'johndoe@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target})=> {
        const {name, value} = target
        setFormState({...formState, [name]: value})
        console.log(username)
    }

    // useEffect(() => {
    //   console.log("useEffect called")
    // }, [])

    // useEffect(() => {
    //   console.log("formState changed")
    // },[formState])
    
    
  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text" className='form-control' placeholder='username' name='username'value={username} onChange={onInputChange}/>
        {(username === 'johndoe') && <Message/>}
        <input type="email" name="email" placeholder='leandro@gmail.com' className='form-control mt-2' value={email} onChange={onInputChange}/>
    </>
  )
}
