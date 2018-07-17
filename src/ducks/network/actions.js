import { createAction } from 'redux-actions';

export const networkError = createAction('NETWORK_ERROR');

export const clearNetworkError = createAction('CLEAR_NETWORK_ERROR');
