import React from 'react';
import PropTypes from 'prop-types';
import Friend from './Friend/Friend.jsx';
import css from './Friends.module.css';

const Friends = (props) => {
  const { friends } = props;
  return (
    <>
      <div className={css.head} >
        Friends
      </div>
      <div className={css.body} >
        {friends.map((friend) => <Friend key={friend.id} {...friend} />)}
      </div>
    </>
  );
};

Friends.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default Friends;
