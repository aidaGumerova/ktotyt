import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ChatList from './Contacts';
import ActiveChat from './ActiveContact';

const allReducers = combineReducers({
  routing: routerReducer,
  contacts: ChatList,
  activeChat: ActiveChat
});

export default allReducers;