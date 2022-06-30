/* eslint-disable default-param-last */
const ACTIONS = {
  SET_USERS: 'SET_USERS',
  FOLLOW_USER: 'FOLLOW_USER',
  UNFOLLOW_USER: 'UNFOLLOW_USER',
};

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USERS:
      return {
        ...state,
        users: [...action.users],
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
export const followUserAction = (userID) => ({ type: ACTIONS.FOLLOW_USER, userID });
export const unfollowUserAction = (userID) => ({ type: ACTIONS.UNFOLLOW_USER, userID });

export default usersReducer;
