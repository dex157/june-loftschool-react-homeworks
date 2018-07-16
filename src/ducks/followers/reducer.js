import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  true
);

const error = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: () => null,
    [fetchFollowersFailure]: (_store, action) => action.payload
  },
  null
);

const ids = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: (_state, action) => action.payload
  },
  []
);

export default combineReducers({
  isFetched,
  isFetching,
  error,
  ids
});
