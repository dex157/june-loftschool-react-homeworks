import { createActions } from 'redux-actions';

const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
);

export { fetchUserRequest, fetchUserSuccess, fetchUserFailure };
