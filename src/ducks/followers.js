import { combineReducers } from 'redux';
import { createActions, handleActions } from 'redux-actions';

/* Start Actions */
export const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE'
);
/* End Actions */

/* Start Selectors */
export const getIsFetching = state => state.followers.isFetching;
export const getIsFetched = state => state.followers.isFetched;
export const getError = state => state.followers.error;
export const getFollowers = state => state.followers.ids;
/* End Selectors */

/* Start Reducers */
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
    [fetchFollowersFailure]: (_, action) => action.payload
  },
  null
);

const ids = handleActions(
  {
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: (_, action) => action.payload,
    [fetchFollowersFailure]: () => null
  },
  []
);
/* End Reducers */

export default combineReducers({
  isFetching,
  isFetched,
  error,
  ids
});
