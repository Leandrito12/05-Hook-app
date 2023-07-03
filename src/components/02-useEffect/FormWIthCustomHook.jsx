import React, { useEffect } from 'react'
import { useForm } from '../../../Hooks/useForm'
import { Button } from 'react-bootstrap'

export const FormWithCustomHook = () => {
    
  const {formState, onInputChange, username, email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: '',
  })
    
    
  return (
    <>
        <h1>Simple Form</h1>
        <hr />

        <input type="text" className='form-control mt-2' placeholder='username' name='username'value={username} onChange={onInputChange}/>
        <input type="text" className='form-control mt-2' placeholder='password' name='password'value={password} onChange={onInputChange}/>
        <input type="email" name="email" placeholder='leandro@gmail.com' className='form-control mt-2' value={email} onChange={onInputChange}/>
        <Button className='btrn btn-primary' onClick={onResetForm}>Reset</Button>
    </>
  )
}
