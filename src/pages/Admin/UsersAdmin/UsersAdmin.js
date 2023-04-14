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
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { loading, users, getUsers } = useUser();

  useEffect(() => {
    getUsers();
  }, [refresh]);

  const OpenCloseModal = () => setShowModal((prev) => !prev);
  const onRefresh = () => setRefresh((prev) => !prev);

  const addUser = () => {
    setTitleModal('Add new user')
    setContentModal(<AddEditUserForm onClose={OpenCloseModal} onRefresh={onRefresh} />)
    OpenCloseModal()
  };

  return (
    <>
      <AdminHeaderPage
        title="Manage users"
        btnTitle={'New'}
        btnClick={addUser}
      />

      {loading ? (
        <Loader active inline='centered'>
          Loading
        </Loader>
      ) : (
        <>
          <UsersTable users={users} />

          <ModalBasic
            title={titleModal}
            show={showModal}
            onClose={OpenCloseModal}
            children={contentModal}
          />

        </>
      )}
    </>
  );
};
