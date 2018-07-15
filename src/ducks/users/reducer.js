import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';

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
    [fetchUserRequest.toString()]: () => {},
    [fetchUserSuccess.toString()]: (_state, action) => action.payload
  },
  {}
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
