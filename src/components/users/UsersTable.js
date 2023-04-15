import { map } from 'lodash'
import React from 'react'
import { Icon, Table, Button } from 'semantic-ui-react'
import './UsersTable.scss'

export function UsersTable(props) {
    const { users, editUser } = props;
    return (
        <Table className='table-users-admin'>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Is Active</Table.HeaderCell>
                    <Table.HeaderCell>Is Staff</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {map(users, (user, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.first_name}</Table.Cell>
                        <Table.Cell>{user.last_name}</Table.Cell>
                        <Table.Cell className='status'>
                            {
                                user.is_active ? <Icon name='check' /> : <Icon name='close' />
                            }
                        </Table.Cell>
                        <Table.Cell className='status'>
                            {
                                user.is_staff ? <Icon name='check' /> : <Icon name='close' />
                            }
                        </Table.Cell>

                        <Actions user={user} editUser={editUser}/>
                    </Table.Row>
                ))}
            </Table.Body>

        </Table>
    )
}

function Actions(props) {
    const {user, editUser} = props;
    return (
        <Table.Cell textAlign='right'>
            <Button icon positive onClick={() => editUser(user)}>
                <Icon name='pencil' />
            </Button>
            <Button icon negative onClick={() => console.log('eliminar usuario: ' + user.email)}>
                <Icon name='trash' />
            </Button>
        </Table.Cell>
    )
}
