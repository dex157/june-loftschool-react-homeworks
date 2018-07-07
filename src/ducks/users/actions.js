import { createActions } from 'redux-actions'

export const {
  fetchSelfRequest,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} = createActions(
  'FETCH_SELF_REQUEST',
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE'
)
