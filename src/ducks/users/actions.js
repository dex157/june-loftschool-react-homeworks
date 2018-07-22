import { createActions } from 'redux-actions';

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest
} = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE',
  'FETCH_TOKEN_OWNER_REQUEST'
);
