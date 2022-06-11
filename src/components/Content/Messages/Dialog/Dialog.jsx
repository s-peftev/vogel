import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

class Dialog extends React.Component {
  render() {
    const { id, photo, name } = this.props;

    return (
      <NavLink
        className={({ isActive }) => {
          return isActive ? `${s.dialog} ${s.active}` : s.dialog;
        }}
        to={`${id}`}
      >
        <div className={s.photo}>
          <img src={photo} alt="" />
        </div>
        <div className={s.name}>
          <p>{name}</p>
        </div>
      </NavLink>
    );
  }
}

export default Dialog;