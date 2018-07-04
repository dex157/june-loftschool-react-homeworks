import { createActions } from 'redux-actions';

const {
  search: {
    getRequest: getShowRequest,
    getSuccess: getSuccesshShowRequest,
    getFailure: getFailureShowRequest
  }
} = createActions({
  SHOW: {
    _REQUEST: null,
    _SUCCESS: null,
    _FAILURE: null
  }
});

export { getShowRequest, getSuccesshShowRequest, getFailureShowRequest };
