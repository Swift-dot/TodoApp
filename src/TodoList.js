import React from 'react'
import { useState } from 'react';
import "./index.css"
const TodoList = () => {
    const[todoList, SetTodoList] = useState([]);
    const [newTask, SetNewTask] = useState("")


    const handleChange = (event) =>{
        SetNewTask(event.target.value)
        
    }
    

    const addTask = () => {
        const task = {
            id: todoList.length ===0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
        }
        SetTodoList([...todoList, task])
       
       
    }
    
    const deleteTask = (id) =>{
       SetTodoList(todoList.filter((task) => task.id !== id ))
       

    }

  return (
    <div className='wrapper'>
        <h1>Todo App</h1>
        <div>
            <input className='input-field' onChange={handleChange} type='text' />
            <button className='btn' onClick={addTask}>Add task</button>
        </div>

        <div style={{marginTop : "50px",}}>
        {todoList.length === 0 ? (<p>No Record Found</p>) :
            <div>
            {todoList.map((task,index) =>{
                return(
                   
                <div className='todo-item'>
                    <h1>{index +1} {task.taskName}</h1>
                    <button onClick={() => deleteTask(task.id)}>X</button>
                </div>
                   )
            })} </div>}
        </div>
    </div>
  )
}

export default TodoList