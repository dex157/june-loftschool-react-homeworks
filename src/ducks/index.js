import { combineReducers } from 'redux';
import { auth } from './auth';
import { followers } from './followers';
import { network } from './network';
import { users } from './users';

export default combineReducers({
  auth,
  followers,
  network,
  users
});
