import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todo-reducer'
import { AddTodoForm } from '../addTodoForm/AddTodoForm'
import { TodoItemGroup } from '../todoItemGroup/TodoItemGroup'

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])


    const addNewTodo = (todo) => {
        const action = {
            type: "Add Todo",
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {

        dispatch({
            type: "Remove Todo",
            payload: id
        })
    }
    return (
        <>
            <h1>TodoApp: 10 <small>on stand by: 2</small></h1>
            <br />

            <div className="row">
                <div className="col-7">
                    <TodoItemGroup todos={todos} onDeleteTodo={handleDeleteTodo} />
                </div>
                <div className="col-5">
                    <h4>add todo</h4>
                    <hr />
                    <AddTodoForm addNewTodo={addNewTodo} />
                </div>
            </div>

        </>
    )
}
