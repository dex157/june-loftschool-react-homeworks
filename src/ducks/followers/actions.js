import { createActions } from 'redux-actions';

const {
  getFollowersRequest,
  getFollowersSuccess,
  getFollowersFailure
} = createActions(
  'GET_FOLLOWERS_REQUEST',
  'GET_FOLLOWERS_SUCCESS',
  'GET_FOLLOWERS_FAILURE'
);

export { getFollowersRequest, getFollowersSuccess, getFollowersFailure };
