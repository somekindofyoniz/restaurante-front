import React from 'react'
import { Button, Loader } from 'semantic-ui-react'
import { useAuth } from '../../../hooks'
import { useEffect } from 'react'
import { useUser } from '../../../hooks'
import { AdminHeaderPage } from '../../../components/headers/AdminHeaderPage'
import { UsersTable } from '../../../components'

export function UsersAdmin() {
  const { loading, users, getUsers } = useUser()

  useEffect(() => {
    getUsers();
  }, [])



  console.log(users)


  return (
    <>
      <AdminHeaderPage title="Manage users" />
      {loading ? (
        <Loader active inline='centered'>
          Cargando
        </Loader>
      ) : (
        <UsersTable users={users}/>
      )
      }
    </>
  )
}
