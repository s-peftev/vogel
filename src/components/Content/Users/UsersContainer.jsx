import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Users from './Users.jsx';
import {
  getUsers,
  toggleDisabledFollowBtnUsersId,
  followUser,
  unfollowUser,
} from '../../../redux/redusers/usersReducer';
import withAuthRedirect from '../../../hoc/withAuthRedirect.jsx';

const UsersContainer = (props) => {
  useEffect(() => {
    props.getUsers(props.currentPage, props.usersPerPage);
  }, []);

  const pageOnClick = (pageNumber) => {
    const totalPages = Math.ceil(props.totalUsersCount / props.usersPerPage);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      props.getUsers(pageNumber, props.usersPerPage);
    }
  };

  return <Users
      pageOnClick={pageOnClick}
      followUser={props.followUser}
      unfollowUser={props.unfollowUser}
      toggleDisabledFollowBtnUsersId={props.toggleDisabledFollowBtnUsersId}
      users={props.users}
      currentPage={props.currentPage}
      usersPerPage={props.usersPerPage}
      totalUsersCount={props.totalUsersCount}
      isFetching={props.isFetching}
      disabledFollowBtnUsersId={props.disabledFollowBtnUsersId}
    />;
};

UsersContainer.propTypes = {
  getUsers: PropTypes.func.isRequired,
  toggleDisabledFollowBtnUsersId: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  disabledFollowBtnUsersId: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  disabledFollowBtnUsersId: state.usersPage.disabledFollowBtnUsersId,
  currentPage: state.usersPage.currentPage,
  usersPerPage: state.usersPage.usersPerPage,
  totalUsersCount: state.usersPage.totalUsersCount,
});

export default compose(
  connect(mapStateToProps, {
    getUsers,
    toggleDisabledFollowBtnUsersId,
    followUser,
    unfollowUser,
  }),
  withAuthRedirect,
)(UsersContainer);
