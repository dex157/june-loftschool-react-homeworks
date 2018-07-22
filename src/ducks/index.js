import { combineReducers } from 'redux';
import users from './users';
import auth from './auth';
import network from './network';
import followers from './followers';

export default combineReducers({
  users,
  auth,
  network,
  followers
});
