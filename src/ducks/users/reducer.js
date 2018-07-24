import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from './action';

const data = handleActions(
  {
    [fetchUserRequest]: () => [],
    [fetchUserSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: () => null,
    [fetchUserFailure]: (_state, action) => action.payload
  },
  null
);

const isFetching = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);

export default combineReducers({
  data,
  isFetching,
  error
});
