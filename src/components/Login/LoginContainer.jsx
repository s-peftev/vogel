import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './Login.jsx';
// import { authUser } from '../../redux/redusers/authReducer';

const LoginContainer = (props) => <Login {...props}/>;

LoginContainer.propTypes = {

};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps)(LoginContainer);
