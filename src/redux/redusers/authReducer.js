/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { authAPI } from '../../api/api';

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

const setUserData = (userData) => ({ type: ACTIONS.SET_USER_DATA, userData });
const toggleIsAuth = (isAuth) => ({
  type: ACTIONS.TOGGLE_IS_AUTH, isAuth,
});

export const authUser = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    dispatch(toggleIsAuth(data.isAuth));
    if (data.isAuth) {
      dispatch(setUserData(data.userData));
    }
  });
};

export default authReducer;
