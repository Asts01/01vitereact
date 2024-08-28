import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter=5;

  const addValue=()=>{
    counter=counter+1;
    console.log(counter);
    
  }
  const decreaseValue=()=>{
    counter=counter-1;
    console.log(counter);
  }

  return (
    <>
      <h2>Lect-4</h2>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value ${counter}</button>
      <button onClick={decreaseValue}>Decrease Value ${counter}</button>
    </>
  )
}

export default App
