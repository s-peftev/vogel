import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Users from './Users.jsx';
import {
  getUsers,
  toggleDisabledFollowBtnUsersId,
  followUser,
  unfollowUser,
} from '../../../redux/redusers/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersPerPage);
  }

  pageOnClick = (pageNumber) => {
    const totalPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      this.props.getUsers(pageNumber, this.props.usersPerPage);
    }
  };

  render() {
    return <Users
      pageOnClick={this.pageOnClick}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      toggleDisabledFollowBtnUsersId={this.props.toggleDisabledFollowBtnUsersId}
      users={this.props.users}
      currentPage={this.props.currentPage}
      usersPerPage={this.props.usersPerPage}
      totalUsersCount={this.props.totalUsersCount}
      isFetching={this.props.isFetching}
      disabledFollowBtnUsersId={this.props.disabledFollowBtnUsersId}
    />;
  }
}

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

export default connect(mapStateToProps, {
  getUsers,
  toggleDisabledFollowBtnUsersId,
  followUser,
  unfollowUser,
})(UsersContainer);
