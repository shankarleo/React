import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum]=useState(10)
  function changenum()
  {
    setNum()
  
  }

 

  return (
    <>
      <div>
        <h1>Value:{num}</h1>
        <button onClick={changenum}>Click Me</button>
      </div>
    </>
  )
}

export default App
