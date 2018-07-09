import { createActions } from 'redux-actions';

export const {
  fetchTokenOwnerRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} = createActions(
  'FETCH_TOKEN_OWNER_REQUEST',
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
);
