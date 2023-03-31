import React from 'react'
import { Button } from 'semantic-ui-react';
import './AdminHeaderPage.scss'
//reusable header
export function AdminHeaderPage(props) {

    //unpack values from props
    const { title, btnTitle, btnTitle2, btnClick, btnClick2 } = props;

    return (
        <div className='header-page-admin'>
            <h2>{title}</h2>
            <div>
                {btnTitle && (
                    <Button positive onClick={btnClick}>{btnTitle}</Button>
                )}

                {btnTitle2 && (
                    <Button negative onClick={btnClick2}>{btnTitle2}</Button>
                )}
            </div>
        </div>
    )
}
