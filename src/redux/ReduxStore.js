import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import headerReduser from './redusers/headerReducer';
import messagesReducer from './redusers/messagesReducer';
import profileReducer from './redusers/profileReducer';
import sidebarReducer from './redusers/sidebarReducer';
import usersReducer from './redusers/usersReducer';
import authReducer from './redusers/authReducer';
import appReducer from './redusers/appReducer';

const reducers = combineReducers({
  header: headerReduser,
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
