function App() {
    const [clicked, setClicked]= useState(1)
  
    return (
      <>
        <button  onClick={()=>setClicked(1)}>1</button>
        <button  onClick={()=>setClicked(2)}>2</button>
        <button  onClick={()=>setClicked(3)}>3</button>
        <button  onClick={()=>setClicked(4)}>4</button>
  
      <Todo id={clicked} />
      </>
    )
  }
  
  
  
  function Todo({id}){
    const [todo, setTodos] = useState([])
    
    useEffect(()=>{
      axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((response)=>setTodos(response.data.todo))
    }, [id]);
    
    return <div>
      ID : {id}
      <h2>Title : {todo.title}</h2>
      <h3>Description : {todo.description}</h3>
      </div>
  }
  