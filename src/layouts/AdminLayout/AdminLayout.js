import React from 'react';
import './AdminLayout.scss';
import {LoginAdmin} from '../../pages/Admin';
import {useAuth} from '../../hooks';
import { AdminTopMenu } from '../../components/top-menu';
import { AdminSideMenu } from '../../components/side-menu';

//props will receibe site content (admin type pages)
export function AdminLayout(props) {
    const { children } = props;
    const {auth} = useAuth();

    //Auth validation
    if (!auth) return <LoginAdmin />

    return (
        //Main layout
        <div className='admin-layout'>
            {/* Top menu */}
            <div className='admin-layout__menu'>
                <AdminTopMenu />
            </div>
            {/* Admin type screens */}
            <div className='admin-layout__main-content'>
                <AdminSideMenu>{children}</AdminSideMenu>
            </div>
        </div>
    )
}
