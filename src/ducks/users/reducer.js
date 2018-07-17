import { handleActions } from 'redux-actions';
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} from './actions';
import { logout } from '../auth';
import { combineReducers } from 'redux';

const data = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchTokenOwnerRequest]: () => null,
    [fetchUserSuccess]: (state, action) => action.payload,
    [fetchUserFailure]: () => null,
    [logout]: () => null
  },
  null
);

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

const error = handleActions(
  {
    [fetchTokenOwnerRequest]: () => null,
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: () => null,
    [fetchUserFailure]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  data,
  isFetching,
  isFetched,
  error
});
