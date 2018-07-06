import { createActions } from 'redux-actions';

const { searchRequest, searchSuccess, searchFailure } = createActions({
  SEARCH_REQUEST: null,
  SEARCH_SUCCESS: null,
  SEARCH_FAILURE: null
});

export { searchRequest, searchSuccess, searchFailure };
