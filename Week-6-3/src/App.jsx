import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [answer, setAnswer] = useState(200)
  const divRef = useRef();

  useEffect(()=>{
    setTimeout(()=>  divRef.current.innerHTML = '23300', 2000)
  },[])

  return (
    <>
     <div>the answer is <div  ref={divRef}>{answer}</div>
     </div>
    </>
  )
}

export default App
