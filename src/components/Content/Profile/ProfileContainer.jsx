/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileInfo } from '../../../api/api';
import Profile from './Profile.jsx';
import {
  setProfileInfo,
  toggleProfileInfoIsFetching,
} from '../../../redux/redusers/profileReducer';

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.toggleProfileInfoIsFetching(true);
    getProfileInfo(userId).then((data) => {
      props.toggleProfileInfoIsFetching(false);
      props.setProfileInfo(data);
    });
  }, [userId]);

  return <Profile
    isFetching={props.isFetching}
    profileInfo={props.profileInfo}
    posts={props.posts}
    postUserInfo={props.postUserInfo}
    />;
};

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  profileInfo: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  postUserInfo: PropTypes.object.isRequired,
  setProfileInfo: PropTypes.func.isRequired,
  toggleProfileInfoIsFetching: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isFetching: state.profilePage.isFetching,
  profileInfo: state.profilePage.profileInfo,
  posts: state.profilePage.posts,
  postUserInfo: {
    userName: state.profilePage.profileInfo.name,
    userLogin: state.profilePage.profileInfo.login,
    userPhoto: state.profilePage.profileInfo.photo,
  },
});

export default connect(mapStateToProps, {
  setProfileInfo,
  toggleProfileInfoIsFetching,
})(ProfileContainer);
