/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import css from './Login.module.css';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('The field is required').email('Invalid email format'),
  password: Yup.string().required('The field is required'),
});

const Login = (props) => {
  const [loginStatus, setLoginStatus] = useState({ isLoginFailed: false, errorMessage: '' });

  return props.isAuth
    ? <Navigate to={'/'} />

    : <div className={css.login}>
      <div className={css.logo}>
        <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
      </div>
      <h1 className={css.h1}>Sign in to GitTalks</h1>

      {loginStatus.isLoginFailed
        ? <div className={css.flash}>
          <p>{loginStatus.errorMessage}</p>
          <button
            className={css.flash_close}
            onClick={() => { setLoginStatus({ isLoginFailed: false, errorMessage: '' }); }}
          >
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-x">
              <path fillRule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
            </svg>
          </button>
        </div>
        : null}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          props.login(values.email, values.password, setLoginStatus);
          resetForm();
        }}
      >
        {(formProps) => <Form className={css.form}>
          <div className={css.form_control}>
            <label className={css.label} htmlFor='email'>Email</label>
            <Field
              className={formProps.touched.email && formProps.errors.email ? `${css.input} ${css.input__error}` : css.input}
              type={'email'} id={'email'} name={'email'}
            />
            <ErrorMessage className={css.error} name={'email'} component={'div'} />
          </div>
          {formProps.status ? formProps.status.error : null}
          <div className={css.form_control}>
            <label className={css.label} htmlFor='password'>Password</label>
            <Field
              className={formProps.touched.password && formProps.errors.password ? `${css.input} ${css.input__error}` : css.input}
              type={'password'} id={'password'} name={'password'}
            />
            <ErrorMessage className={css.error} name={'password'} component={'div'} />
          </div>
          <button className={css.btn} type={'submit'} disabled={formProps.isSubmitting}> Sign in</button>
        </Form>}
      </Formik>
    </div>;
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Login;
