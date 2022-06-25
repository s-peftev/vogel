import { combineReducers, legacy_createStore as createStore } from 'redux';
import headerReduser from './redusers/headerReducer.js';
import messagesReducer from './redusers/messagesReducer.js';
import profileReducer from './redusers/profileReducer.js';
import sidebarReducer from './redusers/sidebarReducer.js';

const redusers = combineReducers({
    header: headerReduser,
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
})

const store = createStore(redusers);

export default store;