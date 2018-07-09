import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './action';

const data = handleActions(
  {
    [fetchFollowersSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersFailure]: (_state, action) => action.payload
  },
  null
);

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
  false
);

export default combineReducers({
  isFetching,
  isFetched,
  data,
  error
});
