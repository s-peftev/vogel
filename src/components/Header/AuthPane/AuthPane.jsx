import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './AuthPane.module.css';

const AuthPane = (props) => (
  <div className={css.panel}>
    <NavLink className={css.userInfo} to={'/profile'}>
      <div className={css.photo}>
        <img src={props.photo} title='' />
      </div>
      <div className={css.name}>
        <p>{props.name}</p>
      </div>
    </NavLink>
    <div className={css.logout} onClick={props.logout}>
      <img src={'https://img.icons8.com/ios-filled/50/C9D1D9/exit.png'} title='' />
    </div>
  </div>
);

AuthPane.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default AuthPane;
