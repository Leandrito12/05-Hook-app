import React from 'react'

export const Button = ({action, text}) => {
  return (
    <button className='btn btn-primary' onClick={action}>{text}</button>
  )
}
