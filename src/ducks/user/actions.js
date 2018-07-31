import { createActions } from 'redux-actions';

const {
  getUserRequest,
  getUserSuccess,
  getUserFailure,
  getUserOwnerRequest
} = createActions(
  'GET_USER_REQUEST',
  'GET_USER_SUCCESS',
  'GET_USER_FAILURE',
  'GET_USER_OWNER_REQUEST'
);

export { getUserRequest, getUserSuccess, getUserFailure, getUserOwnerRequest };
