import { createActions } from 'redux-actions';

const { showRequest, showRequestSuccess, showRequestFailure } = createActions(
  'SHOW_REQUEST',
  'SHOW_REQUEST_SUCCESS',
  'SHOW_REQUEST_FAILURE'
);

export { showRequest, showRequestSuccess, showRequestFailure };
