import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import {
  setProfileInfo,
  toggleProfileInfoIsFetching,
} from '../../../redux/redusers/profileReducer';

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.toggleProfileInfoIsFetching(true);
    axios.get('https://git-talks-server.herokuapp.com/api/users/3')
      .then((response) => {
        this.props.toggleProfileInfoIsFetching(false);
        this.props.setProfileInfo(response.data);
      });
  }

  render() {
    return <Profile
    isFetching={this.props.isFetching}
    profileInfo={this.props.profileInfo}
    posts={this.props.posts}
    postUserInfo={this.props.postUserInfo}
    />;
  }
}

ProfileContainer.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  profileInfo: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
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
