import React from 'react';
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

const Login = (props) => (props.isAuth ? <Navigate to={'/'} />
  : <div className={css.login}>
    <div className={css.logo}>
      <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
    </div>
    <h1 className={css.h1}>Sign in to GitTalks</h1>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.login}
    >
      {({ errors, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.form_control}>
            <label className={css.label} htmlFor='email'>Email</label>
            <Field
              className={errors.email ? `${css.input} ${css.input__error}` : css.input}
              type={'email'} id={'email'} name={'email'}
            />
            <ErrorMessage className={css.error} name={'email'} component={'div'} />
          </div>

          <div className={css.form_control}>
            <label className={css.label} htmlFor='password'>Password</label>
            <Field
              className={errors.password ? `${css.input} ${css.input__error}` : css.input}
              type={'password'} id={'password'} name={'password'}
            />
            <ErrorMessage className={css.error} name={'password'} component={'div'} />
          </div>
          <button className={css.btn} type={'submit'} disabled={isSubmitting}> Sign in</button>
        </Form>
      )}
    </Formik>
  </div>);

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default Login;
