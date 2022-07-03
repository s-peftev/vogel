import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users.jsx';
import {
  setUsersAction,
  followUserAction,
  unfollowUserAction,
  setCurrentPageAction,
  setTotalUsersCountAction,
} from '../../../redux/redusers/usersReducer';

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get(`https://git-talks-server.herokuapp.com/api/users?page=${this.props.currentPage}&count=${this.props.usersPerPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items.data);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  pageOnClick = (pageNumber) => {
    const totalPages = Math.ceil(this.props.totalUsersCount / this.props.usersPerPage);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      axios.get(`https://git-talks-server.herokuapp.com/api/users?page=${pageNumber}&count=${this.props.usersPerPage}`)
        .then((response) => {
          this.props.setCurrentPage(pageNumber);
          this.props.setUsers(response.data.items.data);
        });
    }
  };

  render() {
    return <Users
      pageOnClick={this.pageOnClick}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      users={this.props.users}
      currentPage={this.props.currentPage}
      usersPerPage={this.props.usersPerPage}
      totalUsersCount={this.props.totalUsersCount}
    />;
  }
}

UsersContainer.propTypes = {
  setUsers: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  followUser: PropTypes.func.isRequired,
  unfollowUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  usersPerPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  usersPerPage: state.usersPage.usersPerPage,
  totalUsersCount: state.usersPage.totalUsersCount,
});

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersAction(users));
  },
  setCurrentPage: (currentPage) => {
    dispatch(setCurrentPageAction(currentPage));
  },
  setTotalUsersCount: (totalUsersCount) => {
    dispatch(setTotalUsersCountAction(totalUsersCount));
  },
  followUser: (userId) => {
    dispatch(followUserAction(userId));
  },
  unfollowUser: (userId) => {
    dispatch(unfollowUserAction(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
