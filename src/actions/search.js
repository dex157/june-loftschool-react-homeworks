import { createActions } from 'redux-actions';

const { searchRequest, searchSuccess, searchFailure } = createActions(
  'SEARCH_REQUEST',
  'SEARCH_SUCCESS',
  'SEARCH_FAILURE'
);

export { searchSuccess, searchRequest, searchFailure };
