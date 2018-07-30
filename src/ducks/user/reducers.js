import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchUserRequest,
  fetchOwnerRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions';

const isFetching = handleActions(
  {
    [fetchOwnerRequest.toString()]: () => true,
    [fetchUserRequest.toString()]: () => true,
    [fetchUserSuccess.toString()]: () => false,
    [fetchUserFailure.toString()]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchOwnerRequest.toString()]: () => null,
    [fetchUserRequest.toString()]: () => null,
    [fetchUserSuccess.toString()]: (_state, action) => action.payload,
    [fetchUserFailure.toString()]: () => null
  },
  null
);

const error = handleActions(
  {
    [fetchOwnerRequest.toString()]: () => null,
    [fetchUserRequest.toString()]: () => null,
    [fetchUserSuccess.toString()]: () => null,
    [fetchUserFailure.toString()]: (_state, action) => action.payload
  },
  null
);

export default combineReducers({ isFetching, data, error });
