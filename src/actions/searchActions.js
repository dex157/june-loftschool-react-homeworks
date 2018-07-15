import { createActions } from 'redux-actions';

export const { searchRequest, searchSuccess, searchFailure } = createActions({
  SEARCH_REQUEST: undefined,
  SEARCH_SUCCESS: undefined,
  SEARCH_FAILURE: undefined
});
