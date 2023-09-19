import React, { useEffect } from "react"; 
import { useState } from "react";
import axios from "axios";
export default function TodosApi() {
  const [Todos,setTodos] = useState([])
  useEffect(()=>{
    console.log("befoer");
    axios.get("https://todo-api-dom.vercel.app/api/todos")
    .then(res=>{
setTodos(res.data.data)
    })
    .catch(err=>{
        console.log('err');
    })
}
    const CreateNewTodo(){
        e.preventDefault()
        axios.post("https://todo-api-dom.vercel.app/api/todos",
        title:e.target.title.value).then(res=>{
            alert("data created")
            fetchtodo()
        }).catch(err=>{
            alert(JSON.stringify)
        })
  })

    return (
        <>
        Todos-APi
        <form onSubmit={CreateNewTodo}>
            <input type="text" name="title" />
            <button>add</button>
        </form>
        <ul>
            {
                Todos.map(todo=>{
                    return <li>{todo.title}</li>
                })
            }
        </ul>
        </>
    )
}