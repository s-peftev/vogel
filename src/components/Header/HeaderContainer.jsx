import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header.jsx';
import { setUserData, toggleIsAuth } from '../../redux/redusers/authReducer';

const HeaderContainer = (props) => {
  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpReques',
    },
    withCredentials: true,
  });

  useEffect(() => {
    http.post('/api/auth/me').then((response) => {
      props.toggleIsAuth(response.data.isAuth);
      if (response.data.isAuth) {
        props.setUserData(response.data.userData);
      }
    });
  }, [props.isAuth]);

  return <Header {...props}/>;
};

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  toggleIsAuth: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userData: {
    name: state.auth.userData.name,
    login: state.auth.userData.login,
    photo: state.auth.userData.photo,
  },
});

export default connect(mapStateToProps, { setUserData, toggleIsAuth })(HeaderContainer);
