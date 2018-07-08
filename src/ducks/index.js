import { combineReducers } from 'redux';
import auth from './auth';

export { authRequest, authSuccess, authFailure } from './auth';

export default combineReducers({
  auth
});