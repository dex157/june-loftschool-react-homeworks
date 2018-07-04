import { createActions } from 'redux-actions';

const getShowRequest = createActions('SHOW_REQUEST');
const getSuccesshShowRequest = createActions('SHOW_SUCCESS');
const getFailureShowRequest = createActions('SHOW_FAILURE');

export { getShowRequest, getSuccesshShowRequest, getFailureShowRequest };
