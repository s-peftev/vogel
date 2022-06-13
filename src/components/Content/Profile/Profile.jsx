import React from 'react';
import UserCard from './UserCard/UserCard.jsx';
import Posts from './Posts/Posts.jsx';
import css from './Profile.module.css';

class Profile extends React.Component {
  render() {
    const { user_info, posts } = this.props;
    return (
      <div className={css.profile}>
        <div className={css.user_card}>
          <UserCard user_info={user_info} />
        </div>
        <div className={css.posts}>
          <Posts posts={posts} />
        </div>
      </div>
    );
  }
}

export default Profile;