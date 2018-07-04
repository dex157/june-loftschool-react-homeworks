import { createActions } from 'redux-actions';

const {
  search: {
    getRequest: getSearchRequest,
    getSuccess: getSuccesshSearchRequest,
    getFailure: getFailureSearchRequest
  }
} = createActions({
  SEARCH: {
    _REQUEST: null,
    _SUCCESS: null,
    _FAILURE: null
  }
});

export { getSearchRequest, getSuccesshSearchRequest, getFailureSearchRequest };
