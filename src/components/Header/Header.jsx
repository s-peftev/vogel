import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={s.header}>
        <NavLink className={s.logo} to="/">
          <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
        </NavLink>
      </div>
    );
  }
}

export default Header;