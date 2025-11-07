import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Content = () => {
  return (
    <div className='h-[90vh] flex items-center gap-10 py-10 px-16'>
      <LeftContent></LeftContent>
      <RightContent></RightContent>
    </div>
  )
}

export default Content
