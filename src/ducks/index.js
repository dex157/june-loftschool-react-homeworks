import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';

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

export default combineReducers({
  auth,
  users
});
