import React from 'react'
import { Button, Loader } from 'semantic-ui-react'
import { useAuth } from '../../../hooks'
import { useEffect, useState } from 'react'
import { useUser } from '../../../hooks'
import { AdminHeaderPage } from '../../../components/headers/AdminHeaderPage'
import { AddEditUserForm, UsersTable } from '../../../components'
import { ModalBasic } from '../../../components/common/ModalBasic'
import './UsersAdmin.scss'

export function UsersAdmin() {
  const [showModal, setShowModal] = useState(false)
  const [titleModal, setTitleModal] = useState(null)
  const [contentModal, setContentModal] = useState(null)
  const { loading, users, getUsers } = useUser()

  useEffect(() => {
    getUsers();
  }, [])

  const OpenCloseModal = () => setShowModal((prev) => !prev);

  const addUser = () => {
    setTitleModal('Add new user')
    setContentModal(<AddEditUserForm />)
    OpenCloseModal()
  }

  return (
    <>
    
      <AdminHeaderPage
        title="Manage users"
        btnTitle={'New'}
        btnClick={addUser}
      />

      {loading ? (
        <Loader active inline='centered'>
          Cargando
        </Loader>
      ) : (
        <>
          <UsersTable users={users} />
          {/*<div className='users-admin-content'>*/}

          <ModalBasic
            title={titleModal}
            show={showModal}
            onClose={OpenCloseModal}
            children={contentModal}
          />

          {/*</div>*/}

        </>
      )
      }
    </>
  )
}
