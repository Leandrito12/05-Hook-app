import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

  const {user} = useContext(UserContext)
  return (
    <div>HomePage <small>{user?.name}</small></div>
  )
}
