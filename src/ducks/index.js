import {combineReducers} from 'redux';
import auth from './auth';
import users from './users';
import followers from './followers';
import network from './network';

export {
   authorize,
   logout,
   getIsAuthorized
} from './auth';

export {
   userRequest,
   userSuccess,
   userFailure,
   getData,
   getError,
   getIsFetched,
   getIsFetching
} from './users';

export {
   followersRequest,
   followersSuccess,
   followersFailure,
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
