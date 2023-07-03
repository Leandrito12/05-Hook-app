import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CallBackHook } from './components/06-memo/CallBackHook';
import "./components/08-useReducer/intro-Reducer"
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp/>
  </React.StrictMode>,
)
