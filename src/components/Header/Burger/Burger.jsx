import React from 'react';
import PropTypes from 'prop-types';
import s from './Burger.module.css';

const Burger = (props) => {
  const { isActive, toggleBurger } = props;

  return (
    <div
      onClick={toggleBurger}
      className={isActive ? `${s.burger} ${s.active}` : s.burger}
    >
      <span className={s.line}></span>
    </div>
  );
};

Burger.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggleBurger: PropTypes.func.isRequired,
};

export default Burger;
