import React from 'react';
import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import s from './Profile.module.css';

class Profile extends React.Component {
  render() {
    const { parrentClass } = this.props;
    return (
      <main className={`${parrentClass} ${s.profile}`}>
        <UserCard parrentClass={s.user_card} />
        <Posts parrentClass={s.posts} />
      </main>
    );
  }
}
  
export default Profile;