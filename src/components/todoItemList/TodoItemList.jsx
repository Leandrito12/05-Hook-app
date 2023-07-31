import React from 'react'

export const TodoItemList = ({ todo, onDeleteTodo, onToggleTodo }) => {
  console.log(todo)
  return (
    <li key={todo?.id} className='list-group-item'>
      <span 
      className={`align-self-center ${todo.done && 'text-decoration-line-through' } `}
      onClick={()=> onToggleTodo(todo.id)}
      >
        
        {todo?.description}
        </span>
      <button className='btn btn-primary' onClick={()=> onDeleteTodo(todo.id)}>delete</button>
    </li>
  )
}
