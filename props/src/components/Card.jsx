import React from 'react'

const Card = (props) => {


  return (
    <div className="card">
      <h1>{props.user},{props.RD}</h1>
      <br></br>
      <img src={props.img}></img>
      <p>{props.desc}</p>
      <button>Download</button>
    </div>
   
  )
}

export default Card
