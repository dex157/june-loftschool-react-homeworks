import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './action';

const data = handleActions(
  {
    [fetchUserSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserFailure]: (_state, action) => action.payload
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

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
