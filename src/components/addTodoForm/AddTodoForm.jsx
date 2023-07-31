import React from 'react'
import { useForm } from '../../Hooks/useForm'

export const AddTodoForm = ({addNewTodo}) => {
  const {description, onInputChange, onResetForm} = useForm({
    description: "",
})

const onFormSubmit = (event) => {
  event.preventDefault()
  if(description === "")return
  const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
  }

  addNewTodo(newTodo)
  onResetForm()
  
}        
  return (
    <form action="" onSubmit={onFormSubmit}>
                        <input 
                        type="text" 
                        placeholder='todo' 
                        name="description" 
                        value={description} 
                        onChange={onInputChange} 
                        className='form-control' />
                        <button type='submit' className='btn btn-outline-primary mt-1'>add</button>
                    </form>
  )
}
