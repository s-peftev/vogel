/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
const ACTIONS = {
  SET_USER_DATA: 'SET_USER_DATA',
  TOGGLE_IS_AUTH: 'TOGGLE_IS_AUTH',
};

const initialState = {
  isAuth: false,
  userData: {
    id: '',
    name: '',
    login: '',
    email: '',
    photo: '',
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER_DATA:
      return {
        ...state,
        userData: { ...action.userData },
      };
    case ACTIONS.TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setUserData = (userData) => ({ type: ACTIONS.SET_USER_DATA, userData });
export const toggleIsAuth = (isAuth) => ({
  type: ACTIONS.TOGGLE_IS_AUTH, isAuth,
});

export default authReducer;
