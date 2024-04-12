import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([])

 fetch("http://localhost:3000/todos", 
  {
    method: "GET",
       })
  .then(async(response)=>{
    const jsoon = await response.json();
    setTodos(jsoon.todos);
  }).catch((e) =>{
    console.log("error is ", e)
  });

  return (
    <>
     <CreateTodo setTodos={setTodos} todos={todos}></CreateTodo><br /><br />
     <Todos todos={todos}></Todos><br /><br />
    </>
  )
}

export default App
