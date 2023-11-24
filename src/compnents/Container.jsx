import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className='max-w-[1320px] mx-auto'>{children}</div>
  )
}

export default Container