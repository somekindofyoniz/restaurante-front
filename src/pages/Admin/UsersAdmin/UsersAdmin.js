import React from 'react'
import { Loader } from 'semantic-ui-react'
import { useAuth } from '../../../hooks'
import { useEffect, useState } from 'react'
import { useUser } from '../../../hooks'
import { AdminHeaderPage } from '../../../components/headers/AdminHeaderPage'
import { AddEditUserForm, ModalMessage, UsersTable } from '../../../components'
import { ModalBasic } from '../../../components/common/ModalBasic'

import './UsersAdmin.scss'
import { Box, Stack, TextField, Typography, Button, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export function UsersAdmin() {
  //states
  const [showModal, setShowModal] = useState(false);
  const [showModalMessage, setShowModalMessage] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [size, setSize] = useState('tiny')
  const [contentModal, setContentModal] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { loading, users, getUsers, deleteUser } = useUser();

  //Get user list
  useEffect(() => {
    console.log('getting users')
    getUsers();
  }, [refresh]);

  const OpenCloseModal = () => setShowModal((prev) => !prev);
  const OpenCloseModalMessage = () => setShowModalMessage((prev) => !prev);
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

  const deletingUser = async (data) =>{
    console.log('deletinguser executing')
    try {
      await deleteUser(data.id)
      onRefresh()
    } catch (error) {
      console.error(error)
    }
    setShowModalMessage(false)
    //setRefresh(false)
  }

  //User delete confirmation modal
  const onDelete = (data) => {
    console.log('ondelete executing')
    setTitleModal('Warning');
    setSize('mini')
    setContentModal(
      <>
        <Box>
          <Typography>Are you sure you want to delete the user {data.username}?</Typography>
          <Typography>This action cannot be undone.</Typography>
        </Box>
        <Box marginTop={2}>
          <Stack direction={'row-reverse'} spacing={1}>
            <Button aria-label={'delete'} onClick={() => deletingUser(data)}
              variant={'contained'}
              color={'error'}
            >
              <DeleteIcon /> Delete
            </Button>
            <Button variant={'outlined'} onClick={OpenCloseModalMessage}>Cancel</Button>
          </Stack>
        </Box>
      </>
    )
    setShowModalMessage(true)
    setRefresh(true)
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
          <UsersTable users={users} editUser={editUser} deleteUser={deleteUser} onDelete={onDelete} />

          <ModalBasic
            title={titleModal}
            show={showModal}
            size={size}
            onClose={OpenCloseModal}
            children={contentModal}
          />

          <ModalMessage
            title={titleModal}
            show={showModalMessage}
            size={size}
            onClose={OpenCloseModalMessage}
            children={contentModal}
          />

        </>
      )}
    </>
  );
};
