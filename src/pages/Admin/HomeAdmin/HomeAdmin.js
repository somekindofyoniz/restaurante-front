import React from 'react'
import { Button } from 'semantic-ui-react'
import {useAuth} from '../../../hooks'
export function HomeAdmin() {
  const {logout} = useAuth()
  return (
    <div>
      <h1>Panel de administración</h1>
      <Button onClick={logout}>d</Button>
    </div>
  )
}
