/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Profile from './Profile.jsx';
import {
  getProfileInfo,
} from '../../../redux/redusers/profileReducer';
import withAuthRedirect from '../../../hoc/withAuthRedirect.jsx';
import * as selectors from '../../../redux/selectors';

const ProfileContainer = (props) => {
  const { userId } = useParams();

  useEffect(() => {
    props.getProfileInfo(userId ?? props.myProfileId);
  }, [userId]);

  return <Profile
    isFetching={props.isFetching}
    profileInfo={props.profileInfo}
    posts={props.posts}
    postUserInfo={props.postUserInfo}
    />;
};

ProfileContainer.propTypes = {
  myProfileId: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  profileInfo: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  postUserInfo: PropTypes.object.isRequired,
  getProfileInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myProfileId: selectors.selectAuthUserId(state),
  isFetching: selectors.selectProfileIsFetching(state),
  profileInfo: selectors.selectProfileInfo(state),
  posts: selectors.selectProfilePosts(state),
  postUserInfo: {
    userName: selectors.selectProfileInfo(state).name,
    userLogin: selectors.selectProfileInfo(state).login,
    userPhoto: selectors.selectProfileInfo(state).photo,
  },
});

export default compose(
  connect(mapStateToProps, {
    getProfileInfo,
  }),
  withAuthRedirect,
)(ProfileContainer);
