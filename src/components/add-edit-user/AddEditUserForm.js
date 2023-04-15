import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './AddEditUserForm.scss'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useUser } from '../../hooks'


export function AddEditUserForm(props) {

  const {onClose, onRefresh, user } = props;
  const {addUser, editUser} = useUser()

  const Formik = useFormik({

    initialValues: initialValues(user),
    validationSchema: Yup.object(user? editValidation : addValidation),
    validateOnChange: true,

    onSubmit: async (formValue) => {
      console.log('formValue --->>' + JSON.stringify(formValue))
      try {
        
        if (user) editUser(user.id, formValue)
        else await addUser(formValue);
        
        onRefresh();
        onClose();
      } catch (error) {
        console.error(error)
      }
    },

  });

  return (
    <Form className='add-edit-user-form' onSubmit={Formik.handleSubmit}>
      <Form.Input
        name={'username'}
        placeholder={'Username'}
        value={Formik.values.username}
        onChange={Formik.handleChange}
        error={Formik.errors.username}
      />
      <Form.Input
        name={'email'}
        placeholder={'Email'}
        value={Formik.values.email}
        onChange={Formik.handleChange}
        error={Formik.errors.email}
      />
      <Form.Input
        name={'first_name'}
        placeholder={'First name'}
        value={Formik.values.first_name}
        onChange={Formik.handleChange}
        error={Formik.errors.first_name}
      />
      <Form.Input
        name={'last_name'}
        placeholder={'Last name'}
        value={Formik.values.last_name}
        onChange={Formik.handleChange}
        error={Formik.errors.last_name}
      />
      <Form.Input
        name={'password'}
        placeholder={'Password'}
        value={Formik.values.password}
        onChange={Formik.handleChange}
        error={Formik.errors.password}
      />

      {/* is Active */}
      <div className='add-edit-user-form__active'>
        <Checkbox
          toggle
          checked={Formik.values.is_active}
          label='is active'
          name='is_active'
          //value={Formik.values.is_active}
          onChange={(_, data) => { Formik.setFieldValue('is_active', data.checked) }}
          error={Formik.errors.is_active}
        />
      </div>

      {/* is Staff */}
      <div className='add-edit-user-form__staff'>
        <Checkbox
          toggle
          checked={Formik.values.is_staff}
          label='is staff'
          name='is_staff'
          //value={Formik.values.is_staff}
          onChange={(_, data) => { Formik.setFieldValue('is_staff', data.checked) }}
        />
      </div>

      <Button primary type='submit' content={user? 'Update' : 'Create'} fluid />
    </Form>
  );
};

function initialValues(data) {
  return {
    username: data?.username ||'',
    email: data?.email || '',
    first_name: data?.first_name || '',
    last_name: data?.last_name || '',
    is_active: data?.is_active ? true : false,
    is_staff: data?.is_staff ? true : false,
    password: '',
  };
};

const addValidation = {
  username: Yup.string()
    .required(true, 'Required'),
  email: Yup.string()
    .email(true, 'Must be a valid e-mail')
    .required(true),
  first_name: Yup.string()
    .required(true),
  last_name: Yup.string()
    .required(true),
  is_active: Yup.bool()
    .required(true),
  is_staff: Yup.bool()
    .required(true),
  password: Yup.string()
    .required(true),
};

const editValidation = {
  username: Yup.string()
    .required(true, 'Required'),
  email: Yup.string()
    .email(true, 'Must be a valid e-mail')
    .required(true),
  first_name: Yup.string()
    .required(true),
  last_name: Yup.string()
    .required(true),
  is_active: Yup.bool()
    .required(true),
  is_staff: Yup.bool()
    .required(true),
  password: Yup.string()
};

