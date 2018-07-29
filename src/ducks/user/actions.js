import { createActions } from 'redux-actions';

export const { fetchOwnerRequest } = createActions('FETCH_OWNER_REQUEST');

export const { fetchUserSuccess } = createActions('FETCH_USER_SUCCESS');

export const { fetchUserFailure } = createActions('FETCH_USER_FAILURE');

export const { fetchUserRequest } = createActions('FETCH_USER_REQUEST');
