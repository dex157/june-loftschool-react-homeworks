import { createActions } from 'redux-actions';

const {
  search: {
    request: searchRequest,
    success: searchSuccess,
    failure: searchFailure
  }
} = createActions({
    SEARCH:
      {
        REQUEST: null,
        SUCCESS: null,
        FAILURE: null
      }
  },
  { namespace: "_" }
);

export { searchRequest, searchSuccess, searchFailure };