import React from 'react';
import './AdminLayout.scss';
import {LoginAdmin} from '../../pages/Admin';

//props will receibe site content
export function AdminLayout(props) {
    const { children } = props;
    const auth = null;

    if (!auth) return <LoginAdmin />

    return (
        <div>
            <h2>Admin Layout</h2>
            {/* Get all the page content and wrap in children */}
            {children}
        </div>
    )
}
