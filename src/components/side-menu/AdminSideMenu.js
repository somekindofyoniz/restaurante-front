import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './AdminSideMenu.scss'
import { Link, useLocation } from 'react-router-dom';

export function AdminSideMenu(props) {
    //Navigation, get current site path name
    const {pathname} = useLocation();
    //Get content
    const {children} = props;
    return (
        <div className='side-menu-admin'>
            {/*Pass the current path to the side menu*/}
            <MenuLeft pathname={pathname} />
            {/* Content */}
            <div className='content'>{children}</div>
        </div>
    )
}

//Side menu definition
function MenuLeft(props){
    const {pathname} = props;
    return(
        //Side menu
        <Menu fixed='left' vertical className='side'>
            
            {/* Home */}
            <Menu.Item as={Link} to={'/admin'} active={pathname === '/admin'}>
                <Icon name='home' />Home
            </Menu.Item>
            
            {/* Tables */}
            <Menu.Item as={Link} to={'/admin/tables'} active={pathname === 'admin/tables'}>
                <Icon name='food' />Tables
            </Menu.Item>

            {/* Payments History */}
            <Menu.Item as={Link} to={'/admin/payments-history'} active={pathname === 'admin/payments-history'}>
                <Icon name='dollar' />Payments history
            </Menu.Item>
            
            {/* Food categories */}
            <Menu.Item as={Link} to={'/admin/categories'} active={pathname === 'admin/categories'}>
                <Icon name='folder' />Categories
            </Menu.Item>

            {/* Products */}
            <Menu.Item as={Link} to={'/admin/products'} active={pathname === 'admin/products'}>
                <Icon name='cart' />Products
            </Menu.Item>


            {/* Users */}
            <Menu.Item as={Link} to={'/admin/users'} active={pathname === 'admin/users'}>
                <Icon name='users' />Users
            </Menu.Item>
        </Menu>
    )
}