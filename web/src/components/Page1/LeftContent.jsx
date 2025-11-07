import React from 'react'
import RightContent from './RightContent'

const LeftContent = () => {
  return (
    <div className='h-full flex-col justify-between w-1/3 '>
       <div className='p-5'>
        <h3 className='text-4xl mb-6 font-bold'>Prespective<br></br><span className='text-gray-600 '>Customer </span>Segmentation</h3>
        <p className='text-xl font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iste accusantium eligendi deleniti, eum illo saepe molestiae recusandae molestias nesciunt.</p>
       </div>
      <div className='text-6xl'><i className="ri-arrow-right-up-line"></i></div>
    </div>
  )
}

export default LeftContent
