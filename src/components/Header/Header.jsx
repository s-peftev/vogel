import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import AuthPane from './AuthPane/AuthPane.jsx';

const Header = (props) => (
  <div className={css.header}>
    <NavLink className={css.logo} to="/profile">
      <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
    </NavLink>
    <div className={css.auth}>
      {props.isAuth
        ? <AuthPane {...props.userData} logout={props.logout} />
        : null}
    </div>
  </div>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Header;
