import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../../api/api';
import Users from './Users.jsx';
import {
  setUsers,
  toggleIsFetching,
  toggleIsFollowBtnBlocked,
  followUser,
  unfollowUser,
  setCurrentPage,
  setTotalUsersCount,
} from '../../../redux/redusers/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.usersPerPage)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items.data);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  pageOnClick = (pageNumber) => {
    const totalPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      this.props.toggleIsFetching(true);
      getUsers(pageNumber, this.props.usersPerPage)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setCurrentPage(pageNumber);
          this.props.setUsers(data.items.data);
        });
    }
  };

  render() {
    return <Users
      pageOnClick={this.pageOnClick}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      toggleIsFollowBtnBlocked={this.props.toggleIsFollowBtnBlocked}
      users={this.props.users}
      currentPage={this.props.currentPage}
      usersPerPage={this.props.usersPerPage}
      totalUsersCount={this.props.totalUsersCount}
      isFetching={this.props.isFetching}
      isFollowBtnBlocked={this.props.isFollowBtnBlocked}
    />;
  }
}

UsersContainer.propTypes = {
  setUsers: PropTypes.func.isRequired,
  toggleIsFetching: PropTypes.func.isRequired,
  toggleIsFollowBtnBlocked: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isFollowBtnBlocked: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  isFetching: state.usersPage.isFetching,
  isFollowBtnBlocked: state.usersPage.isFollowBtnBlocked,
  currentPage: state.usersPage.currentPage,
  usersPerPage: state.usersPage.usersPerPage,
  totalUsersCount: state.usersPage.totalUsersCount,
});

export default connect(mapStateToProps, {
  setUsers,
  toggleIsFetching,
  toggleIsFollowBtnBlocked,
  setCurrentPage,
  setTotalUsersCount,
  followUser,
  unfollowUser,
})(UsersContainer);
