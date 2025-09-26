import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from './todoSlice'

function TodoList() {
  
    const todos = useSelector((state)=>state.todos.todo)
    console.log(todos)

    const dispatch = useDispatch()

    return (
    <div>
      <h1>Hello this Todolist here</h1>
      <ul>
        {
        todos && todos.map((data,index)=>{
            return(
                <li key={index}>{data} <button>Edit</button> <button  onClick={()=>dispatch(deleteTodo(index))} >Delete</button></li>
            )
        })
      }
      </ul>
    </div>
  )
}

export default TodoList
