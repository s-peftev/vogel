import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Dialog.module.css';

class Dialog extends React.Component {
  render() {
    const { parrentClass, id, photo, name } = this.props;

    return (
      <NavLink
        className={({ isActive }) => {
          return isActive ? `${parrentClass} ${css.dialog} ${css.active}` : `${parrentClass} ${css.dialog}`;
        }}
        to={`${id}`}
      >
        <div className={css.photo}>
          <img src={photo} alt="" />
        </div>
        <div className={css.name}>
          <p>{name}</p>
        </div>
      </NavLink>
    );
  }
}

export default Dialog;