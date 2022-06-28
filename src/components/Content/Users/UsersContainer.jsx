import { connect } from 'react-redux';
import Users from './Users.jsx';
import {
  setUsersAction,
  followUserAction,
  unfollowUserAction
} from '../../../redux/redusers/usersReducer.js';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAction(users));
    },
    followUser: (userId) => {
      dispatch(followUserAction(userId));
    },
    unfollowUser: (userId) => {
      dispatch(unfollowUserAction(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;