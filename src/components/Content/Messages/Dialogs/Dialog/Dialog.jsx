import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import css from './Dialog.module.css';

const Dialog = (props) => {
  const {
    parrentClass, id, photo, name,
  } = props;

  return (
    <NavLink
      className={({ isActive }) => (isActive ? `${parrentClass} ${css.dialog} ${css.active}` : `${parrentClass} ${css.dialog}`)}
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
};

Dialog.propTypes = {
  parrentClass: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Dialog;
