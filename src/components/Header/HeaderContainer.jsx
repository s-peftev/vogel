import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authMe } from '../../api/api';
import Header from './Header.jsx';
import { setUserData, toggleIsAuth } from '../../redux/redusers/authReducer';

const HeaderContainer = (props) => {
  useEffect(() => {
    authMe().then((data) => {
      props.toggleIsAuth(data.isAuth);
      if (data.isAuth) {
        props.setUserData(data.userData);
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
