import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = (props) => (
  <div className={css.header}>
    <NavLink className={css.logo} to="/profile">
      <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
    </NavLink>
    <div className={css.auth}>
      {props.isAuth
        ? <h2>{props.userData.name}</h2>
        : <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </div>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
};

export default Header;
