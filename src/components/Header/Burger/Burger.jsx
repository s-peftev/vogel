import React from 'react';
import s from './Burger.module.css';

class Burger extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <div
        onClick={state.burger.handleClick}
        className={state.burger.active ? `${s.burger} ${s.active}` : s.burger}
      >
        <span className={s.line}></span>
      </div>
    );
  }
}

export default Burger;