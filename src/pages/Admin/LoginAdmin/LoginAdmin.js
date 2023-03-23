import React from 'react'
import { Header } from 'semantic-ui-react'
import { LoginAdminForm } from '../../../components/forms/login_admin_form'
import './LoginAdmin.scss'
export function LoginAdmin() {
  return (
    //Main container
    <div className='login-admin'>
      {/* card container */}
      <div className='login-admin__container'>
        <h1>Login</h1>
        <LoginAdminForm />
        <a>Password reset</a>
      </div>
    </div>
  )
}
