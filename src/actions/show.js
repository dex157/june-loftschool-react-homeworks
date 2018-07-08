import { createActions } from 'redux-actions';

const {
  show: {
    getRequest: getShowRequest,
    getSuccess: getShowSuccess,
    getFailure: getShowFailure
  }
} = createActions({
  SHOW: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { getShowRequest, getShowSuccess, getShowFailure };
