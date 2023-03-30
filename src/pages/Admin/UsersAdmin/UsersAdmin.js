import React from 'react'
import { Button } from 'semantic-ui-react'
import {useAuth} from '../../../hooks'
export function UsersAdmin() {
  const {logout} = useAuth()
  return (
    <div>
      <h1>User list</h1>
      <Button onClick={logout}>d</Button>
    </div>
  )
}
