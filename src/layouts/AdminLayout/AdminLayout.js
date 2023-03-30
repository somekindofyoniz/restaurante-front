import React from 'react';
import './AdminLayout.scss';
import {LoginAdmin} from '../../pages/Admin';
import {useAuth} from '../../hooks';
import { AdminTopMenu } from '../../components/top-menu';
import { AdminSideMenu } from '../../components/side-menu';

//props will receibe site content
export function AdminLayout(props) {
    const { children } = props;
    const {auth} = useAuth();


    if (!auth) return <LoginAdmin />

    return (
        <div className='admin-layout'>
            <div className='admin-layout__menu'>
                <AdminTopMenu />
            </div>

            <div className='admin-layout__main-content'>
                <AdminSideMenu>{children}</AdminSideMenu>
            </div>

        </div>
    )
}
