import React from 'react';
import PropTypes from 'prop-types';
import css from './Counters.module.css';

const Counters = (props) => {
  const { commentsCount, likesCount } = props;
  return (
    <div className={css.counters}>
      <div className={css.counter}>
        <a href='/'>
          <div className={css.icon}>
            <img src='https://img.icons8.com/ios/24/C9D1D9/macbook-chat--v1.png' alt=''></img>
          </div>
        </a>
        <p>{commentsCount}</p>
      </div>
      <div className={css.counter}>
        <a href='/'>
          <div className={css.icon}>
            <img src='https://img.icons8.com/ios-filled/24/C9D1D9/two-hearts.png' alt=''></img>
          </div>
        </a>
        <p>{likesCount}</p>
      </div>
    </div>
  );
};

Counters.propTypes = {
  likesCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
};

export default Counters;
