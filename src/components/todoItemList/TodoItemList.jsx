import React from 'react'

export const TodoItemList = ({ todo, onDeleteTodo }) => {
  console.log(todo)
  return (
    <li key={todo?.id} className='list-group-item'>
      <span>{todo?.description}</span>
      <button className='btn btn-primary' onClick={()=> onDeleteTodo(todo.id)}>delete</button>
    </li>
  )
}
