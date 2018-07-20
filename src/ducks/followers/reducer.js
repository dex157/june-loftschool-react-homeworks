import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './action';
import { logout } from '../auth';

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);

const data = handleActions(
  {
    [fetchFollowersSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersFailure]: (_state, action) => action.payload,
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: () => null
  },
  null
);

export default combineReducers({
  isFetching,
  data,
  error
});
