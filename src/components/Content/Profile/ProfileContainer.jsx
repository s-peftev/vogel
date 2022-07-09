/* eslint-disable no-debugger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import {
  setProfileInfo,
  toggleProfileInfoIsFetching,
} from '../../../redux/redusers/profileReducer';

const ProfileContainer = (props) => {
  const { userId } = useParams();

  const http = axios.create({
    baseURL: 'https://git-talks-server.herokuapp.com',
    headers: {
      'X-Requested-With': 'XMLHttpReques',
    },
    credentials: true,
  });

  async function logIn() {
    const csrf = await http.get('/sanctum/csrf-cookie');
    console.log('csrf = ', csrf);
    debugger;
    const login = await http.post('/api/login', {
      email: 'stani@gmail.com',
      password: '0000',
    });
    console.log('login = ', login);
    debugger;

    http.get(`api/users/${userId ?? 5}`)
      .then((response) => {
        props.toggleProfileInfoIsFetching(false);
        props.setProfileInfo(response.data);
      });
  }

  /* useEffect(() => {
    logIn();
  }, []); */

  useEffect(() => {
    props.toggleProfileInfoIsFetching(true);
    logIn();
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
