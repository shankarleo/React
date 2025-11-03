import React from 'react'

const Card = (props) => {

    
  return (
    <div className='card'>
        <div className='top'>
          <img src={props.img}/>
        </div>
        <div className='middle'>
          <h1>{props.user}</h1>
        </div>
        <div className='bottom'>
          <div className='bleft'>
            <button>Watch</button>

          </div>
          <div className='bright'>
            <button>Download</button>
          </div>
        </div>
      </div>
  )
}

export default Card
