import React from "react"; 
import { useState } from "react";
export default function TodosState() {
    const [todos,setTodos] = useState["html","css"];
    const addTodo = (e)=> {
        e.preventDefault()
        // console.log("new todo");
      let temp = [...todos]
      temp.push(e.target.title.value)
      setTodos(temp)
    }
    return (
        <>
        <br />
        <br />
        todos: {JSON.stringify(todos)}
        <br />
       <form onSubmit={addTodo}>
       <input type="text" />
        <button>add</button>
       </form>
        <h1>Todos List</h1>
        <ul>
           {
            todos.map(element =>{
                return <li>{element} <button>delete</button></li>
            })
           }
        </ul>
        </>
    )
}