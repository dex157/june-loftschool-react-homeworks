import { createActions } from 'redux-actions';

const getSearchRequest = createActions('SEARCH_REQUEST');
const getSuccessSearchRequest = createActions('SEARCH_SUCCESS');
const getFailureSearchRequest = createActions('SEARCH_FAILURE');

export { getSearchRequest, getSuccessSearchRequest, getFailureSearchRequest };
