import React from 'react';
import s from './UserCard.module.css';

class UserCard extends React.Component {
  render() {
    const {
      parrentClass,
      info,
    } = this.props;

    return (
      <div className={`${parrentClass} ${s.user_card}`}>
        <div className={s.header}>
          <div className={s.photo}>
            <img src={ info.photo } alt='profile avatar'></img>
          </div>
          <div className={s.name}>
            <h6 className={s.user_name}>{ info.name }</h6>
            <p className={s.login}>{ info.login }</p>
          </div>
        </div>
        <div className={s.body}>
          <p className={s.info}>
            <span className={s.key}>Birthday: </span>
            <span className={s.value}>{ info.birthday }</span>
          </p>
          <p className={s.info}>
            <span className={s.key}>City: </span>
            <span className={s.value}>{ info.city }</span>
          </p>
          <p className={s.info}>
            <span className={s.key}>Website: </span>
            <span className={s.value}>{ info.website }</span>
          </p>
          <p className={s.info}>
            <span className={s.key}>About: </span>
            <span className={s.value}>{ info.about }</span>
          </p>
        </div>
      </div>
    );
  }
}

export default UserCard;