import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from './Header.jsx';
import { logout } from '../../redux/redusers/authReducer';
import * as selectors from '../../redux/selectors';

const HeaderContainer = (props) => <Header {...props}/>;

HeaderContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: selectors.selectIsAuth(state),
  userData: {
    name: selectors.selectAuthUserName(state),
    photo: selectors.selectAuthUserPhoto(state),
  },
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
