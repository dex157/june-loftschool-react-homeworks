import { createActions } from 'redux-actions';

export const { clearNetworkErrors, networkError } = createActions(
  'CLEAR_NETWORK_ERRORS',
  'NETWORK_ERROR'
);
