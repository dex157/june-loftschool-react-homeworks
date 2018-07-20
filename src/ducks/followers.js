import { createActions } from 'redux-actions';
import { handleActions } from 'redux-actions';

export const { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE'
);

export default handleActions(
  {
    [fetchFollowersRequest.toString()]: state => ({
      ...state,
      isFetching: true,
      isFetched: false,
      ids: [],
      error: null
    }),
    [fetchFollowersSuccess.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      ids: action.payload,
      error: null
    }),
    [fetchFollowersFailure.toString()]: (state, action) => ({
      ...state,
      isFetching: false,
      error: action.error
    })
  },
  { isFetching: false, isFetched: false, ids: [], error: null }
);
