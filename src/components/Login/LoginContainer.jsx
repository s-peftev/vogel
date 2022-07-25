import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login.jsx';
import { login } from '../../redux/redusers/authReducer';
import * as selectors from '../../redux/selectors';

const LoginContainer = (props) => <Login {...props}/>;

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.selectIsAuth(state),
});

export default connect(mapStateToProps, { login })(LoginContainer);
