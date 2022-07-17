import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import { authUser, logout } from '../../redux/redusers/authReducer';

const HeaderContainer = (props) => {
  useEffect(() => {
    props.authUser();
  }, [props.isAuth]);

  return <Header {...props}/>;
};

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  authUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userData: {
    name: state.auth.userData.name,
    photo: state.auth.userData.photo,
  },
});

export default connect(mapStateToProps, { authUser, logout })(HeaderContainer);
