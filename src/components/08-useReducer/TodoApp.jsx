import { useTodo } from '../../Hooks/useTodo'
import { AddTodoForm } from '../addTodoForm/AddTodoForm'
import { TodoItemGroup } from '../todoItemGroup/TodoItemGroup'

export const TodoApp = () => {

    const {todos, addNewTodo, handleDeleteTodo, onToggleTodo, todoCount, pendingTodoCOunt} = useTodo()
    
    return (
        <>
            <h1>TodoApp: {todoCount} <small>on stand by: {pendingTodoCOunt}</small></h1>
            <br />
            <div className="row">
                <div className="col-7">
                    <TodoItemGroup 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={onToggleTodo} />
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