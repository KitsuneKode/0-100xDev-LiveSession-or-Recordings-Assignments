import { useEffect, useState } from 'react'
// import { memo } from 'react'

import './App.css'
import PropTypes from 'prop-types';

function App() {
  const [todos, setTodos] = useState([])

useEffect(()=>{
  setInterval(async()=>{
    
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async function(res){
      const jsonn = await res.json();
      setTodos(jsonn.todos);
    })

  }
  , 10000)
}, [])


return (
    <>
      {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description} /> )}
    </>

  )
//     <>
//     {/* <CardWrapper innerComponent={<TextComponent />} /> */}
//     <CardWrapper>
//       <TextComponent></TextComponent>
//       </CardWrapper>
//     </>
//   )
// }

// function TextComponent(){
//   return <><div>hi there</div></>
// }

// function CardWrapper({children}){
//   return <>
//       <div style={{border: '2px solid black'}}>{children}</div>
//    </>
}
function Todo({title, description}){
  return <div>
   <h2>Title:{title}</h2>
    <h3>Description:{description}</h3>
  </div>
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default App
