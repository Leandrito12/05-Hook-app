import {memo} from 'react'

export const Small = memo(({counter}) => {
  return (
    <small>{counter}</small>
  )
})
