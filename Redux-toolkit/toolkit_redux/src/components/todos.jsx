import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoslice';

const Todos = () => {
  const todos =   useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <div>
    <div>Todos</div>
    {todos.map((todo)=>(
        <li key={todo.id}>
            {todo.text}
            <button onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
        </li>
     ))}
    </div>
  )
}

export default Todos;