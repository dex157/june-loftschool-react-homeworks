import { createActions } from 'redux-actions';

const {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE'
);

export { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure };
