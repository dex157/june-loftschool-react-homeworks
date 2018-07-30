import { createActions } from 'redux-actions';

export const { networkError, clearNetworkErrors } = createActions(
  'NETWORK_ERROR',
  'CLEAR_NETWORK_ERRORS'
);
