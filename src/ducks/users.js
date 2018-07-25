import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';
import { logout } from './auth';

/* Start Actions */
export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE',
  'FETCH_TOKEN_OWNER_REQUEST'
);
/* End Actions */

/* Start Selectors */
export const getUserData = state => state.users.data;
export const getIsFetched = state => state.users.isFetched;
export const getIsFetching = state => state.users.isFetching;
/* End Selectors */

/* Start Reducers */
const isFetching = handleActions(
  {
    [fetchTokenOwnerRequest]: () => true,
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchTokenOwnerRequest]: () => false,
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => true
  },
  false
);

const data = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchTokenOwnerRequest]: () => null,
    [fetchUserSuccess]: (_state, action) => action.payload,
    [fetchUserFailure]: () => null,
    [logout]: () => null
  },
  null
);

const error = handleActions(
  {
    [fetchTokenOwnerRequest]: () => null,
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: () => null,
    [fetchUserFailure]: (_state, action) => action.payload
  },
  null
);
/* End Reducers */

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
