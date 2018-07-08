import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './action';

const data = handleActions(
  {
    [fetchUserSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchUserFailure.toString()]: (_state, action) => action.payload
  },
  null
);

const isFetching = handleActions(
  {
    [fetchUserRequest.toString()]: () => true,
    [fetchUserSuccess.toString()]: () => false,
    [fetchUserFailure.toString()]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchUserRequest.toString()]: () => false,
    [fetchUserSuccess.toString()]: () => true,
    [fetchUserFailure.toString()]: () => true
  },
  false
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
