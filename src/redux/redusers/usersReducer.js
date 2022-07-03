/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
const ACTIONS = {
  SET_USERS: 'SET_USERS',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_TOTAL_USERS_COUNT: 'SET_TOTAL_USERS_COUNT',
};

const initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 3,
  totalUsersCount: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: [...action.users],
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

export const setUsersAction = (users) => ({ type: ACTIONS.SET_USERS, users });

export const setCurrentPageAction = (currentPage) => ({
  type: ACTIONS.SET_CURRENT_PAGE, currentPage,
});

export const setTotalUsersCountAction = (totalUsersCount) => ({
  type: ACTIONS.SET_TOTAL_USERS_COUNT, totalUsersCount,
});

export const followUserAction = (userID) => ({ type: ACTIONS.FOLLOW_USER, userID });

export const unfollowUserAction = (userID) => ({ type: ACTIONS.UNFOLLOW_USER, userID });

export default usersReducer;
