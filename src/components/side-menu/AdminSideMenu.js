import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export function AdminSideMenu(props) {
    const {children} = props;
    return (
        <div className='side-menu-admin'>
            <MenuLeft/>
            <div className='content'>{children}</div>
        </div>
    )
}

function MenuLeft(props){
    const {} = props;
    return(
        <Menu fixed='left' vertical className='side'>
            <Menu.Item>
                <Icon name='home' />Home
            </Menu.Item>
        </Menu>
    )
}