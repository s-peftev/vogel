import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import { logout } from '../../redux/redusers/authReducer';

const HeaderContainer = (props) => <Header {...props}/>;

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  userData: {
    name: state.auth.userData.name,
    photo: state.auth.userData.photo,
  },
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
