import { createActions } from 'redux-actions';

const getShowRequest = createActions('SHOW_REQUEST');
const getSuccessShowRequest = createActions('SHOW_SUCCESS');
const getFailureShowRequest = createActions('SHOW_FAILURE');

export { getShowRequest, getSuccessShowRequest, getFailureShowRequest };
