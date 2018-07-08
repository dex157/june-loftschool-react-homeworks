import { createActions } from 'redux-actions';

const {
  shows: {
    getRequest: getPageRequest,
    getSuccess: getPageSuccess,
    getFailure: getPageFailure,
  },
} = createActions({
  SHOWS: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null,
  },
});

export { getPageRequest, getPageSuccess, getPageFailure };