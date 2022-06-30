import { combineReducers, legacy_createStore as createStore } from 'redux';
import headerReduser from './redusers/headerReducer';
import messagesReducer from './redusers/messagesReducer';
import profileReducer from './redusers/profileReducer';
import sidebarReducer from './redusers/sidebarReducer';
import usersReducer from './redusers/usersReducer';

const reducers = combineReducers({
  header: headerReduser,
  sidebar: sidebarReducer,
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;
