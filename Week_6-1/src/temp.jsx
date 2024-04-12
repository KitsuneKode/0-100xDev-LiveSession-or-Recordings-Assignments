
//memo and reducing re-rendering by dropping the useState in an specific Component


function App() {
    const [tail, setTail] = useState("My tail is straight")
     const [todos, setTodos] = useState([{
      id: 1,
      title:"My tail",
      description:"My tail is straight",},
      {
        id: 2,
      title:"My tail 2",
      description:"My tail is straight too",},
      {
        id:3,
      title:"My tail 3",
      description:"My tail is straight threeo",
    }])
    
    function updateTail(){
      setTail(`My tail is ${Math.random()}`)
    }
  
    return (
  <>    <div>
         <HeaderWithButton></HeaderWithButton>
        <Header title="Manash2"></Header>
        <Header title="Manash2"></Header>
        <Header title="Manash2"></Header>
        <br /><br />
  
        <button onClick={updateTail}>Update the title</button>
        <br />
        <Tail tail={tail}></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
        <Tail tail="My tail is straight"></Tail>
      </div>
    
      <input type="text" placeholder='title' /><br />
      <input type="text" placeholder='description'  /><br />
      <button onClick={function(){
      setTodos([...todos, {
        id:Math.random()/Math.random(),
        title:"sjkajkdsjpd"+Math.random(),
        description:"asdkajkdjakda"+Math.random()
      }])
       console.log(todos[todos.length-1].id)
      }}>Add a todo</button>
     
      {/* <Todo title={todos[1].title}></Todo> */}
  
     {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)
     }
      </>
    
    )
  }
  
  
  
  
  function Todo({title, description}){
    return <div>
     <h2>Title:{title}</h2>
      <h3>Description:{description}</h3>
    </div>
  }
  function HeaderWithButton(){
    const [title, setTitle] = useState("My name is Manash")
    
    function updateTitle(){
      setTitle(`My name is ${Math.random()}`)
    } 
    
    return <>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
    </>  
  }
  
  const Header =function Header({title}){
    return <div>{title}
    </div>
  }
  
  const Tail = memo(function ({tail}){
      return <div>{tail}
      </div>
    })
  