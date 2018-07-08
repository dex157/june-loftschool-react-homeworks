import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './action';

const data = handleActions(
  {
    [fetchFollowersSuccess.toString()]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersFailure.toString()]: (_state, action) => action.payload
  },
  null
);

const isFetching = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => true,
    [fetchFollowersSuccess.toString()]: () => false,
    [fetchFollowersFailure.toString()]: () => false
  },
  false
);

const isFetched = handleActions(
  {
    [fetchFollowersRequest.toString()]: () => false,
    [fetchFollowersSuccess.toString()]: () => true,
    [fetchFollowersFailure.toString()]: () => true
  },
  false
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
