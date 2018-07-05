import { createActions } from 'redux-actions';

const {
  shows: {
    getRequest: getShowsRequest,
    getSuccess: getShowsSuccess,
    getFailure: getShowsFailure
  }
} = createActions({
  SHOWS: {
    GET_REQUEST: null,
    GET_SUCCESS: null,
    GET_FAILURE: null
  }
});

export { getShowsRequest, getShowsSuccess, getShowsFailure };
