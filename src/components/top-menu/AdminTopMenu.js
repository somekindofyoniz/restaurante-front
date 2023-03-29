import React from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { useAuth } from '../../hooks';

export function AdminTopMenu() {
    //auth: user data
    //logout: logout function
    const {auth, logout} = useAuth()
    
    //Conditional user names or username rendering
    const displayUser = () => {
        if (auth.me?.first_name && auth.me?.last_name){
            return auth.me.first_name + ' ' + auth.me.last_name
        }
        else if (auth.me.username){
            return auth.me.username
        }
        else {
            return '-/-'
        }
    }

  return (
    <div>
      <Menu fixed='top' className='top-menu-admin'>
        <Menu.Item><p>Restaurante app</p></Menu.Item>
        <Menu.Menu position='right'>
            <Menu.Item>Hola! {displayUser()}</Menu.Item>
            {/* Logout */}
            <Menu.Item onClick={logout}>
                <Icon name='sign-out'></Icon>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  )
}
