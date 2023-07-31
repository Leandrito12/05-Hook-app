import React from 'react'
import { TodoItemList } from '../todoItemList/TodoItemList'

export const TodoItemGroup = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  console.log(todos)

  return (
    <ul className='list-group'>
      {todos.map((todo) =>(
      <TodoItemList 
      key={todo.id} 
      todo={todo} 
      onDeleteTodo={id => onDeleteTodo(id)}
       onToggleTodo={onToggleTodo}
       />))}
    </ul>
  )
}
