import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import followers from './followers';
import network from './network';

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

export {
  getIsNetworkErrorPresent,
  getMessage,
  clearNetworkErrors,
  networkError
} from './network';

export default combineReducers({
  auth,
  users,
  followers,
  network
});
