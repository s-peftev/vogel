import React from 'react';
import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import s from './Profile.module.css';

class Profile extends React.Component {
  render() {

    return (
      <div className={s.profile}>
        <UserCard parrentClass={s.user_card} />
        <Posts parrentClass={s.posts} />
      </div>
    );
  }
}
  
export default Profile;