import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import followers from './followers';
import network from './network';

export default combineReducers({
  auth,
  user,
  followers,
  network
});
