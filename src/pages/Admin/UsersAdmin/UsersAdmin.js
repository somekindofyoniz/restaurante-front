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
  //states
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { loading, users, getUsers } = useUser();
  
  //Get user list
  useEffect(() => {
    getUsers();
  }, [refresh]);

  const OpenCloseModal = () => setShowModal((prev) => !prev);
  const onRefresh = () => setRefresh((prev) => !prev);

  //Add new user function, set's modal content to the Add/Edit user form, set's the title and set's the refresh, also open/close the modal
  const addUser = () => {
    setTitleModal('Add new user');
    setContentModal(<AddEditUserForm onClose={OpenCloseModal} onRefresh={onRefresh} />);
    OpenCloseModal();
  };

  //Edit existing user
  const editUser = (data) => {
    setTitleModal('Editing user');
    console.log(data)
    setContentModal(<AddEditUserForm onClose={OpenCloseModal} onRefresh={onRefresh} user={data} />);
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
          Loading
        </Loader>
      ) : (
        <>
          <UsersTable users={users} editUser={editUser} />
        
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
