import React from 'react';
import Friend from './Friend/Friend.jsx';
import css from './Friends.module.css';

class Friends extends React.Component {
  render() {
    const { friends } = this.props;
    return (
      <>
        <div className={ css.head} >
          Friends
        </div>
        <div className={ css.body} >
          { friends.map((friend) => <Friend key={ friend.id } {...friend} />) }
        </div>
      </>
    );
  }
}

export default Friends;