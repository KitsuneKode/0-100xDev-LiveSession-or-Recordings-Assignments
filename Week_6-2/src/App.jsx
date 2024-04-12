import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './App.css'

function App(){
  const [input, setInputValue]= useState(0);
  const [counter, setCounter]= useState(0);

  // useEffect(()=>{
  // setCounter(counter+1);
  // },[input])

  let sum = useMemo(()=>{
    console.log("memo is called")
    let finalSum = 0
  for(let i=1; i<=input; i++){
    finalSum +=i;
  }
    return finalSum;
  },[input])

  // let finalsum = 0
  // for(let i=1; i<=input; i++){
  //   finalsum +=i;
  // }

  return (
      <>
          <input type="text" placeholder='number' onChange={num=>setInputValue(num.target.value)} />
          <div>sum is {sum}</div>
          <button onClick={()=>setCounter(counter+1)}>Count is {counter}</button>
      </>
  )
}
export default App
