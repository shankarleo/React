import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]= useState(0)

  // let counter = 0 

  const add=()=>
  {
    if(counter < 100)
    console.log("Value added", counter);
    // counter = counter + 1
    setCounter(counter+1)
  }

  const remove = () =>
  {
    if(counter>0)
    setCounter(counter-1)
  }
  

  return (
    <>
      <h1>Header</h1>
      <h2>Counter Value: {counter}</h2>

    
      <button onClick={add}>
        +
      </button>

      <br></br>

      <button onClick={remove}>
        - 
      </button>

      <p>Value: {counter}</p>
    </>
  )
}



export default App
