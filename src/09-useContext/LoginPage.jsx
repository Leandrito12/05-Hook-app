import { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext)
  
  return (
    <div>
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button onClick={() => setUser({id: 123, name: "john", email: "john@gmail.example"})}> tocar</button>

    </div>
  )
}
