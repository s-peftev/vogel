import React from 'react';
import ProfileCardContainer from './ProfileCard/ProfileCardContainer.jsx';
import PostsContainer from './Posts/PostsContainer.jsx';
import css from './Profile.module.css';

const Profile = () => (
    <div className={css.profile}>
      <div className={css.pofile_card}>
        <ProfileCardContainer />
      </div>
      <div className={css.posts}>
        <PostsContainer />
      </div>
    </div>
);

export default Profile;
