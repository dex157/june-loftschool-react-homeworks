import { createActions } from 'redux-actions';

export const { showRequest, showSuccess, showFailure } = createActions(
  'SHOW_REQUEST',
  'SHOW_SUCCESS',
  'SHOW_FAILURE'
);
