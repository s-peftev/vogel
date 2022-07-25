import React from 'react';
import PropTypes from 'prop-types';
import ProfileCard from './ProfileCard/ProfileCard.jsx';
import Posts from './Posts/Posts.jsx';
import DashLoader from '../../Common/Preloaders/DashLoader/DashLoader.jsx';
import css from './Profile.module.css';

const Profile = (props) => (
  <div className={css.profile}>
    {props.isFetching ? <div className={css.loader}><DashLoader /></div>
      : <><div className={css.pofile_card}>
        <ProfileCard {...props.profileInfo } changeMainPhoto={props.changeMainPhoto}/>
      </div><div className={css.posts}>
          <Posts posts={props.posts} postUserInfo={props.postUserInfo} />
        </div></>}
  </div>
);

Profile.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  profileInfo: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  postUserInfo: PropTypes.object.isRequired,
  changeMainPhoto: PropTypes.func.isRequired,
};

export default Profile;
