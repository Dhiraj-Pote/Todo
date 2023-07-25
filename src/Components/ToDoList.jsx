import React from 'react'
import ToDo from "./ToDo";

const ToDoList = ({todos, checkTodo, delTodo}) => {
  return (
    <div>

      {todos.map((todos)=>{
        return <ToDo task = {todos.task} isComp = {todos.isComp} id = {todos.key} checkTodo={checkTodo} key = {todos.key} delTodo = {delTodo} />
      })}
    </div>
  )
}

export default ToDoList
