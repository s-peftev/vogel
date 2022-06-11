import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './Burger/Burger.jsx';
import s from './Header.module.css';

class Header extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <div className={s.header}>
        <NavLink className={s.logo} to="/">
          <img src='https://logodix.com/logo/64439.png' alt="logo"></img>
        </NavLink>
        <div className={s.burger}>
          <Burger state={state}/>
        </div>
      </div>
    );
  }
}

export default Header;