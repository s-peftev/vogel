import { connect } from 'react-redux';
import Users from './Users.jsx';
import {
  setUsersAction,
  followUserAction,
  unfollowUserAction,
  setCurrentPageAction,
  setTotalUsersCountAction,
} from '../../../redux/redusers/usersReducer';

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
