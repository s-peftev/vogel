import React from 'react';
import s from './Counters.module.css';

class Counters extends React.Component {
  render() {
    const { parrentClass, comments_count, likes_count } = this.props;
    return (
      <div className={`${parrentClass} ${s.counters}`}>
        <div className={s.counter}>
          <a href='/'>
            <div className={s.icon}>
              <img src='https://img.icons8.com/ios/24/000000/macbook-chat--v1.png' alt=''></img>
            </div>
          </a>
          <p>{ comments_count }</p>
        </div>
        <div className={s.counter}>
          <a href='/'>
            <div className={s.icon}>
              <img src='https://img.icons8.com/ios-filled/24/000000/two-hearts.png' alt=''></img>
            </div>
          </a>
          <p>{ likes_count }</p>
        </div>
      </div>
    );
  }
}

export default Counters;