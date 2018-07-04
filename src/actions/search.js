import { createActions } from 'redux-actions';

const getSearchRequest = createActions('SEARCH_REQUEST');
const getSuccesshSearchRequest = createActions('SEARCH_SUCCESS');
const getFailureSearchRequest = createActions('SEARCH_FAILURE');

export { getSearchRequest, getSuccesshSearchRequest, getFailureSearchRequest };
