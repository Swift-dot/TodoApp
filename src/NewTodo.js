import React from 'react';
import { useState } from 'react';

const NewTodo = () => {
    const [todoList, setTodoList] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleChange = (event) =>{
        setNewTask(event.target.value)
    }

    const addTask = () =>{
        const task ={
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskname: newTask,
        }
        setTodoList([...todoList, task])
    }

    const deleteTask = (id) =>{
       

       setTodoList(todoList.filter((task) => task.id !== id))


       

    }
  return (
    <div className='wrapper'>
  
    <div>
        <input className='input-field' onChange={handleChange} type='text' required />
        <button className='btn' onClick={addTask}>Add Task</button>
    </div>


    <div>

        {todoList.length === 0 ? 
        <p>No record found</p> :
        <div>
        {todoList.map((task,index) =>{
            return(
                
                <div className='todo-item'>
                   <h1>{index + 1} {task.taskname}</h1> 
                   <button onClick={() => deleteTask(task.id)}>X</button>
                </div>
            )
        })}  
        </div>
        }
    </div>
  
          
    </div>
  )
}

export default NewTodo