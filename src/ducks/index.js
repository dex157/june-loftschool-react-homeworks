import { combineReducers } from 'redux';
import user from './user';
import auth from './auth';
import network from './network';
import followers from './followers';

export default combineReducers({ auth, user, network, followers });
