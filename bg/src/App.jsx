import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState("Black")
  return (
    <div
  className="w-full h-screen duration-200"
  style={{ backgroundColor: color }}
>
      
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
  
  <button 
  onClick={()=> setColor("red")}
  className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "red"}}
  >
    Red</button>

   <button 
   onClick={()=> setColor("green")}
   className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Green", color:"Black"}}
  >
    Green</button>

    <button 
    onClick={()=> setColor("blue")}
    className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Blue",}}
  >
    Blue</button>

    <button 
    onClick={()=> setColor("yellow")}
    className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Yellow",color:"Black"}}
  >
    Yellow</button>

    <button 
    onClick={()=> setColor("pink")}
    className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Pink",color:"Black"}}
  >
    Pink</button>

    <button 
    onClick={()=> setColor("orange")}
    className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Orange",color:"Black"}}
  >
    Orange</button>

     <button 
     onClick={()=> setColor("brown")}
     className='outline-none px-4 py-1 rounded-full shadow-lg'
  style={{backgroundColor: "Brown"}}
  >
    Brown</button>

    <button 
    onClick={()=> setColor("white")}
    className='outline-none px-4 py-1 rounded-full shadoww-lg'
  style={{backgroundColor: "white",color:"Black"}}
  >
    White</button>
</div>

      </div>
      
    </div>
  )
}

export default App
