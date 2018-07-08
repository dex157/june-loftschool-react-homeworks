import { createActions } from 'redux-actions';

const {
  search: {
    getRequest: getSearchRequest,
    getSuccess: getSearchSuccess,
    getFailure: getSearchFailure,
  },
} = createActions({
  SEARCH: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null,
  },
});

export { getSearchRequest, getSearchSuccess, getSearchFailure };