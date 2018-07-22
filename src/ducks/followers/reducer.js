import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';
import { logout } from '../auth';

const isFetching = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => true,
    [fetchFollowersSuccess.toString()]: () => false,
    [fetchFollowersFailure.toString()]: () => false
  },
  false
);

const ids = handleActions(
  {
    [logout.toString()]: () => null,
    [fetchFollowersRequest.toString()]: () => null,
    [fetchFollowersSuccess.toString()]: (_state, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [fetchFollowersFailure.toString()]: (_state, action) => action.payload,
    [fetchFollowersRequest.toString()]: () => null,
    [fetchFollowersSuccess.toString()]: () => null
  },
  null
);

export default combineReducers({
  isFetching,
  ids,
  error
});
