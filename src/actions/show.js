import { createActions } from 'redux-actions';

const { getShowRequest, getShowSuccess, getShowFailure } = createActions({
  GET_SHOW_REQUEST: null,
  GET_SHOW_SUCCESS: null,
  GET_SHOW_FAILURE: null
});

export { getShowRequest, getShowSuccess, getShowFailure };
