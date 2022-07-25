/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import { usersAPI } from '../../api/api';

const ACTIONS = {
  SET_USERS: 'SET_USERS',
  TOGGLE_IS_FETCHING: 'TOGGLE_IS_FETCHING',
  TOGGLE_DISABLED_FOLLOW_BTN_USERS_IS: 'TOGGLE_DISABLED_FOLLOW_BTN_USERS_IS',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
};

const initialState = {
  users: [],
  isFetching: false,
  disabledFollowBtnUsersId: [],
  currentPage: 1,
  usersPerPage: 10,
  totalUsersCount: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case ACTIONS.TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ACTIONS.TOGGLE_DISABLED_FOLLOW_BTN_USERS_IS:
      return {
        ...state,
        disabledFollowBtnUsersId: state.disabledFollowBtnUsersId.includes(action.followBtnUserId)
          ? state.disabledFollowBtnUsersId.filter((userId) => userId !== action.followBtnUserId)
          : [...state.disabledFollowBtnUsersId, action.followBtnUserId],
      };
    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case ACTIONS.SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case ACTIONS.FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case ACTIONS.UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

// action creators
export const setUsers = (users) => ({ type: ACTIONS.SET_USERS, users });
export const toggleIsFetching = (isFetching) => ({
  type: ACTIONS.TOGGLE_IS_FETCHING, isFetching,
});
export const toggleDisabledFollowBtnUsersId = (followBtnUserId) => ({
  type: ACTIONS.TOGGLE_DISABLED_FOLLOW_BTN_USERS_IS, followBtnUserId,
});
export const setCurrentPage = (currentPage) => ({
  type: ACTIONS.SET_CURRENT_PAGE, currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: ACTIONS.SET_TOTAL_USERS_COUNT, totalUsersCount,
});
export const follow = (userID) => ({ type: ACTIONS.FOLLOW_USER, userID });
export const unfollow = (userID) => ({ type: ACTIONS.UNFOLLOW_USER, userID });

// thunk creators
export const getUsers = (currentPage, usersPerPage) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, usersPerPage)
    .then((data) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items.data));
      dispatch(setCurrentPage(currentPage));
      dispatch(setTotalUsersCount(data.totalCount));
    });
};

export const followUser = (followUserId) => (dispatch) => {
  dispatch(toggleDisabledFollowBtnUsersId(followUserId));
  usersAPI.follow(followUserId).then((data) => {
    if (data.done) {
      dispatch(follow(followUserId));
      dispatch(toggleDisabledFollowBtnUsersId(followUserId));
    }
  });
};

export const unfollowUser = (followUserId) => (dispatch) => {
  dispatch(toggleDisabledFollowBtnUsersId(followUserId));
  usersAPI.unfollow(followUserId).then((data) => {
    if (data.done) {
      dispatch(unfollow(followUserId));
      dispatch(toggleDisabledFollowBtnUsersId(followUserId));
    }
  });
};

//
export default usersReducer;
