import React from 'react';
import s from './Dialog.module.css';

class Dialog extends React.Component {
  render() {
    const { photo, name, parrentClass } = this.props;

    return (
      <div className={`${parrentClass} ${s.dialog}`}>
        <div className={s.photo}>
          <img src={ photo } alt="" />
        </div>
        <div className={s.name}>
          <p>{ name }</p>
        </div>
      </div>
    );
  }
}
  
export default Dialog;