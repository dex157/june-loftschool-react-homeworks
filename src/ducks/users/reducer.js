import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';
import { logout } from '../auth';

const isFetching = handleActions(
  {
    [fetchTokenOwnerRequest.toString()]: () => true,
    [fetchUserRequest.toString()]: () => true,
    [fetchUserSuccess.toString()]: () => false,
    [fetchUserFailure.toString()]: () => false
  },
  false
);

const userData = handleActions(
  {
    [logout.toString()]: () => null,
    [fetchUserRequest.toString()]: () => null,
    [fetchUserSuccess.toString()]: (_state, action) => action.payload.data
  },
  null
);

const error = handleActions(
  {
    [fetchUserRequest.toString()]: () => null,
    [fetchUserSuccess.toString()]: () => null,
    [fetchUserFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({
  isFetching,
  userData,
  error
});
