import React from 'react'
import Card from './components/Card'

const App = () => {
  let a = {
    user: "OTC",
    text: 22
  }


  return (
    <>
    <div>
      <h1 className='h-full w-full bg-green-400 mb-4 text-white p-4 rounded-xl'> Thh
      </h1>
 
      <Card channel="WWE" one={a}></Card>
      <Card></Card>
      </div>
</>
    
  )
}

export default App
