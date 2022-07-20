/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { authAPI } from '../../api/api';
import { authUser } from './authReducer';

const ACTIONS = {
  SET_APP_INITIALIZED: 'SET_APP_INITIALIZED',
};

const initialState = {
  appInitialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_APP_INITIALIZED:
      return {
        ...state,
        appInitialized: true,
      };
    default:
      return state;
  }
};

const setAppInitialized = () => ({ type: ACTIONS.SET_APP_INITIALIZED });

export const initializeApp = () => (dispatch) => {
  const authPromise = dispatch(authUser());

  Promise.all([authPromise]).then(() => {
    dispatch(setAppInitialized());
  });
};

export default appReducer;
