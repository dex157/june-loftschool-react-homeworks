import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import followers from './followers';

export { authorize, logout, getIsAuthorized } from './auth';
export {
  requestUser,
  successUser,
  failureUser,
  getData,
  getError,
  getIsFetched,
  getIsFetching
} from './users';
export {
  requestFollowers,
  successFollowers,
  failureFollowers,
  getIds,
  getErrorFollowers,
  getIsFetchedFollowers,
  getIsFetchingFollowers
} from './followers';

export default combineReducers({
  auth,
  users,
  followers
});
