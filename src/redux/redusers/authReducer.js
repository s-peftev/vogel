/* eslint-disable no-debugger */
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

export const login = (email, password, setLoginStatus) => (dispatch) => {
  authAPI.login(email, password).then((response) => {
    if (response.data.loginStatus === 'success') {
      dispatch(authUser());
    } else if (response.data.loginStatus === 'fail') {
      setLoginStatus({ isLoginFailed: true, errorMessage: response.data.message });
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then(() => {
    dispatch(setUserData({
      id: '',
      name: '',
      login: '',
      email: '',
      photo: '',
    }));
    dispatch(authUser());
  });
};

export default authReducer;

/* email: 'stani@gmail.com',
        password: '0000', */
