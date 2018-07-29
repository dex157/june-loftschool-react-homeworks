import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from './actions';

const data = handleActions(
  {
    [fetchFollowersSuccess]: (_, { payload }) => payload
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

const error = handleActions(
  {
    [fetchFollowersFailure]: (_, { payload }) => payload
  },
  null
);

export default combineReducers({ data, isFetching, error });
