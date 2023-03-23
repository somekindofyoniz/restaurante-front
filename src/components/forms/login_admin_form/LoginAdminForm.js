import React, { useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Container, Form, FormInput, Grid, GridRow, Header, Button } from 'semantic-ui-react'
import { loginApi } from '../../../api/user'
import {toast} from 'react-toastify'
import { useAuth } from '../../../hooks/'


export function LoginAdminForm() {
    const { login } = useAuth();
    console.log(useAuth())
    
    //Formik definition
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema:Yup.object(validationSchema()),
        onSubmit: async (values) => {
            try {
                const response = await loginApi(values);
                const access = response;
                //console.log(response)
                login(access)
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    })
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                label='Username or e-mail'
                size='large'
                required={true}
                icon={'user'}
                iconPosition='left'
                error={formik.errors.username}
            />
            <Form.Input
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                label='Password'
                type='password'
                size='large'
                required={true}
                icon={'key'}
                iconPosition='left'
                error={formik.errors.password}
            />
            <Button 
                type='submit'
                primary
                fluid
                content='login'
            />
        </Form>
    )

}
function validationSchema () {
    return{
        username: Yup.string()
            .required(true)
            .min(5, '5 characters min')
            //.email(true, 'must be a valid e-mail')
            .max(30, '30 characters max'),
        password: Yup.string()
            .min(5, '5 characters min')
            .max(30,'30 characters max'),
    };
}

