import React from 'react';
import s from './Burger.module.css';
import { toggleBurgerAction } from '../../../redux/redusers/headerReducer.js';

const Burger = (props) => {
  const { state, dispatch } = props;

  const toggleBurger = () => {
    dispatch(toggleBurgerAction());
  }

  return (
    <div
      onClick={toggleBurger}
      className={state.isActive ? `${s.burger} ${s.active}` : s.burger}
    >
      <span className={s.line}></span>
    </div>
  );
};

export default Burger;