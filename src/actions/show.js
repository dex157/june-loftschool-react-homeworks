import { createActions } from 'redux-actions';

export const { getShowRequest, getShowSuccess, getShowFailure } = createActions(
  'GET_SHOW_REQUEST',
  'GET_SHOW_SUCCESS',
  'GET_SHOW_FAILURE'
);